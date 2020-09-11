<template>
	<view class="wrap">
		<template v-if="showMask">
			<u-mask :show="showMask" :custom-style="{ background: '#fff' }">
				<view class="mask-warp">
					<u-loading mode="circle"></u-loading>
					<text class="u-m-l-10">加载中，请稍后...</text>
				</view>
			</u-mask>
		</template>
		<template v-else>
			<view class="bg"><image src="../../static/img/bg.png" mode="widthFix"></image></view>
			<view class="content">
				<u-form :model="form" ref="uForm">
					<u-form-item prop="username" label-width="0rpx"><u-input placeholder="请输入用户名" v-model="form.username" /></u-form-item>
					<u-form-item prop="password" label-width="0rpx"><u-input :password-icon="true" type="password" placeholder="请输入密码" v-model="form.password" /></u-form-item>
					<u-form-item prop="imageCode" label-width="0rpx">
						<view class="u-flex u-row-between">
							<u-input placeholder="请输入验证码" v-model="form.imageCode" />
							<image @click="getImage" class="imageCode" :src="imageData" mode="aspectFit"></image>
						</view>
					</u-form-item>
				</u-form>
				<view class="open-to u-flex u-row-between">
					<view class=""></view>
					<navigator url="/pages/login/register" open-type="navigate"><text class="register">注册</text></navigator>
				</view>
				<u-button type="success" @click="submit">登录</u-button>
			</view>
		</template>
	</view>
</template>

<script>
import { awaitWrap } from '@/common/tools';
import { getMenu } from './menu.js';
export default {
	data() {
		return {
			showMask: true,
			form: {
				username: 'admin',
				password: '123456',
				imageCode: ''
			},
			rules: {
				username: [
					{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}
				]
			},
			imageData: ''
		};
	},

	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.login(this.form);
				} else {
					console.log('验证失败');
				}
			});
		},
		async checkLogin() {
			if (this.vuex_token) {
				const res = await this.$u.post(
					'/heter-web-api/oauth/check_token',
					{ token: this.vuex_token },
					{
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				);

				if (res.data && res.data.active) {
					this.postUserGetuserinfo();
				} else {
					this.showMask = false;
				}
			} else {
				this.showMask = false;
			}
		},
		async postUserGetuserinfo() {
			const [err, res] = await this.$u.api.postUserGetuserinfo();
			if (err) {
				this.fail(err);
				this.showMask = false;
				return;
			}

			this.$u.vuex('vuex_user', res);
			let tabs = getMenu(res.userType);

			let home = '/' + tabs[1].pagePath;
			this.$u.vuex('vuex_home', home);

			this.$u.vuex('vuex_tabbar', transPath(tabs));
			
			this.setTabs(tabs);
			
			setTimeout(()=>{
				console.log(home)
				this.$u.route({
					type: 'reLaunch',
					url: home
				});
			},1500)
		},
		setTabs(tabs) {
			tabs.forEach((it, idx) => {
				uni.setTabBarItem({
					index: idx,
					...it
				});
			});
		},

		async login(data) {
			this.load('登录中...');
			const [err, res] = await awaitWrap(
				this.$u.post('/heter-web-api/auth/form', data, {
					Authorization: 'Basic bXV3dS1jbGllbnQtYXV0aDptdXd1Q2xpZW50U2VjcmV0',
					'Content-Type': 'application/x-www-form-urlencoded',
					deviceId: this.vuex_deviceId
				})
			);
			this.hide();
			if (err) {
				this.getImage();
				this.fail(err);
				return;
			}

			this.$u.vuex('vuex_token', res.access_token);
			this.postUserGetuserinfo();
		},
		async getImage() {
			const deviceId = this.$u.guid(20);
			this.$u.vuex('vuex_deviceId', deviceId);

			const [err, res] = await awaitWrap(
				this.$u.post(
					'/heter-web-api/auth/code/image',
					{},
					{
						'Content-Type': 'application/x-www-form-urlencoded',
						deviceId
					}
				)
			);
			if (err) {
				this.fail(err);
				return;
			}
			this.imageData = 'data:image/png;base64,' + res.replace(/[\r\n]/g, '');
		}
	},
	onShow() {
		this.checkLogin();
		this.getImage();
	},
	onReady() {
		this.$refs.uForm && this.$refs.uForm.setRules(this.rules);
		uni.hideTabBar();
	}
};

function transPath(data) {
	return data.map(it => {
		return { ...it, iconPath: '/' + it.iconPath, selectedIconPath: '/' + it.selectedIconPath, pagePath: '/' + it.pagePath };
	});
}
</script>

<style lang="scss" scoped>
@import './login.scss';
.wrap {
	height: 100vh;
	overflow: hidden;
}
.mask-warp {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	.rect {
		background-color: #fff;
	}
}
</style>
