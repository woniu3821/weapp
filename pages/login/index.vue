<template>
	<view class="wrap">
		<view class="bg"><image src="../../static/img/bg.png" mode="aspectFit"></image></view>
		<view class="content">
			<u-form :model="form" ref="uForm">
				<u-form-item prop="username" label-width="0rpx"><u-input placeholder="请输入用户名" v-model="form.username" /></u-form-item>
				<u-form-item prop="password" label-width="0rpx"><u-input :password-icon="true" type="password" placeholder="请输入密码" v-model="form.password" /></u-form-item>
				<u-form-item prop="imageCode" label-width="0rpx">
					<view class="u-flex u-row-between">
						<view class="col"><u-input placeholder="请输入验证码" v-model="form.imageCode" /></view>
						<view class=""><image :src="url" mode="aspectFit"></image></view>
					</view>
				</u-form-item>
			</u-form>

			<u-button type="success" @click="submit">提交</u-button>
		</view>
	</view>
</template>

<script>
import { awaitWrap } from '@/common/tools';
export default {
	data() {
		return {
			form: {
				username: '',
				password: '',
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
	computed: {
		url() {
			return 'data:image/gif;base64' + this.imageData;
		}
	},
	onShow() {
		this.getImage();
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
		async login(data) {
			this.load('登录中...');
			const [err, res] = await this.request('/auth/form', {
				data: data
			});
			this.hide();
			if (err) {
				console.log(err);
				this.toast('登录失败');
				return;
			}
			uni.redirectTo({
				url: '/pages/home/main'
			});
		},
		async getImage() {
			const [err, res] = await awaitWrap(
				this.post(
					'/auth/code/image',
					{},
					{
						deviceId: this.$u.guid(20)
					}
				)
			);
			if(err){
				this.toast(err)
				return;
			}
			this.imageData=res;
		}
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	position: relative;
	.bg {
		width: 100%;
		image {
			height: 432rpx;
		}
	}

	.content {
		width: 686rpx;
		margin: 0 auto;
	}
}
</style>
