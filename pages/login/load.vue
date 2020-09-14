<template>
		<u-mask  :show="show" :custom-style="{ background: '#fff' }">
			<view class="mask-warp">
				<view class="content">
					<u-loading mode="circle"></u-loading>
					<text class="u-m-l-10">加载中，请稍后...</text>
				</view>
		
			</view>
		</u-mask>
</template>

<script>

	import config from '@/common/config.js'
	import mixins from './mixins.js'
	export default {
		mixins:[mixins],
		data(){
			return {
				show:true
			}
		},
		methods: {
			async checkLogin() {
				if (this.vuex_token) {
						this.postUserGetuserinfo();
				} else {
					this.$u.route({
						type: 'redirect',
						url: '/pages/login/index'
					});
				}
			},
			
		},
		onShow() {
			this.checkLogin();
		}
	};


</script>

<style lang="scss" scoped>
	.mask-warp{
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
