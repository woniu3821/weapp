<template>
		<u-mask  :show="true" :custom-style="{ background: '#fff' }">
			<view class="mask-warp">
				<u-loading mode="circle"></u-loading>
				<text class="u-m-l-10">加载中，请稍后...</text>
			</view>
		</u-mask>
</template>

<script>
	import {
		awaitWrap
	} from '@/common/tools';
	import {
		getMenu
	} from './menu.js';
	export default {
		data() {
			return {
			};
		},

		methods: {
			async checkLogin() {
				if (this.vuex_token) {
					const res = await this.$u.post(
						'/heter-web-api/oauth/check_token', {
							token: this.vuex_token
						}, {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					);

					if (res.data && res.data.active) {
						this.postUserGetuserinfo();
					} else {
						this.$u.vuex('vuex_token', '');
						this.$u.route({
							type: 'reLaunch',
							url: '/pages/login/index'
						});
					}
				} else {
					this.$u.route({
						type: 'reLaunch',
						url: '/pages/login/index'
					});
				}
			},
			async postUserGetuserinfo() {

				const [err, res] = await this.$u.api.postUserGetuserinfo();
				if (err) {
					this.fail(err);
					this.hide();
					this.showMask = false;
					return;
				}

				this.$u.vuex('vuex_user', res);
				let [userType, tabs] = getMenu(res.userType);

				let home = '/' + tabs[0].pagePath;
				this.$u.vuex('vuex_home', home);
				this.$u.vuex('vuex_type', userType);
				this.$u.vuex('vuex_tabbar', transPath(tabs));
				this.setTabs(tabs);
				this.$u.route({
					type: 'reLaunch',
					url: home
				});

			},
			setTabs(tabs) {
				tabs.forEach((it, idx) => {
					uni.setTabBarItem({
						index: idx,
						...it
					});
				});
			},
		},
		onShow() {
			this.checkLogin();
		}
	};

	function transPath(data) {
		return data.map(it => {
			return { ...it,
				iconPath: '/' + it.iconPath,
				selectedIconPath: '/' + it.selectedIconPath,
				pagePath: '/' + it.pagePath
			};
		});
	}
</script>

<style lang="scss" scoped>
</style>
