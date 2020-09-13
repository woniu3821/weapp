<template>
	<view class="wrap">
		<view class="title">
			请点击按钮获取相应的权限，以便您使用完整的功能
		</view>
		<button open-type="openSetting" @opensetting="onGetLocation">立即授权</button>
	</view>
</template>

<script>
	import {
		getPermission
	} from '@/common/mapUtil.js';
	export default {
		methods:{
			onGetLocation(){
				uni.openSetting({
					success: (res) => {
						var statu = res.authSetting;
						if (statu['scope.userLocation']) {
							this.totas('授权成功')
							this.$u.route({
								type: 'back'
							})
						}
					},
					fail(err) {
						this.fail(
							'授权失败'
						)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 30rpx;

		.title {
			font-size: 32rpx;
			color: #333;
		}
	}
</style>
