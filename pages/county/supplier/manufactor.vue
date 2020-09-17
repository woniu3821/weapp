<template>
	<view class="wrap">
		<view class="container list">
			<view class="item" @tap="setTitle(index)" v-for="(item,index) in list" :key="index">
				<image :src="item.icon" mode="aspectFit"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view class="container scroll">
			<Bar v-if='showTitle'>{{title}}</Bar>
			<template v-if="active===1">
				<view class="image-box">
					<image src="../../static/img/zjbb.png" mode="aspectFit"></image>
				</view>
			</template>
			<template v-if="active===2">
				<view class="image-box">
					<image src="../../static/img/zjbb.png" mode="aspectFit"></image>
				</view>
			</template>
			<template v-else>
				正在开发中,敬请期待。
			</template>

		</view>
	</view>
</template>
<script>
	import Bar from '@/components/bar.vue'
	import Solid from './solid.vue'
	export default {
		components: {
			Bar,
			Solid
		},
		data() {
			return {
				params: {},
				showTitle: true,
				title: '工商信息',
				current: 0,
				active: 0,
				list: [{
						icon: '../../static/img/gsxxb.png',
						title: '工商信息'
					},
					{
						icon: '../../static/img/zjbb.png',
						title: '肥料质检报告'
					},
					{
						icon: '../../static/img/spgl.png',
						title: '商品管理'
					}
				]
			}
		},
		onLoad() {
			this.params=this.vuex_landParams
			uni.setNavigationBarTitle({
				title: this.params.name
			});
			
		},
		methods: {
			setTitle(idx) {
				
				if(idx===3){
					this.$u.route({
						url:'/pages/subLand/muck'
					})
					return;
				}

				
				this.active = idx;
				this.title = this.list[idx].title;
				this.showTitle = false;
				this.$nextTick(() => {
					this.showTitle = true;
				})
				
			}
		},
	};
</script>
<style>
	page {
		background-color: #f2f2f2;
	}
</style>
<style lang="scss" scoped>
	.image-box {
		max-width: 705rpx;
		margin: 0 auto;

		image {
			width: 100%;
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		overflow: hidden;
	}

	.container {
		width: 718rpx;
		margin: 0 auto;
		border-radius: 5rpx;
		background-color: #fff;
		padding: 35rpx 0;
		box-shadow: 0 3rpx 10rpx #eee;
	}
	.scroll{
		overflow-y: auto;
	}

	.list {
		margin: 16rpx auto;
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 33.3333%;
			margin-bottom: 40rpx;

			image {
				height: 50rpx;
				width: 50rpx;
			}

			text {
				margin-top: 26rpx;
				font-size: 32rpx;
				color: #333333;
			}
		}
	}

	.scroll.container {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 16rpx;

		.scroll-box {
			flex: 1;
			height: 1px;

			.scroll-view {
				height: 100%;

				.page-box {
					.item {
						width: 100%;
						background-color: #ffffff;
						box-sizing: border-box;
						display: flex;
						align-items: center;

						.left {
							margin-right: 24rpx;
						}

						.content {
							width: 100%;
							padding: 12rpx 0;
							border-bottom: 1px solid #e4e7ed;
							flex: 1;
							display: flex;
							flex-direction: column;
							justify-content: space-between;

							.title {
								font-size: 32rpx;
								color: #333;
							}

							.title.c1 {
								color: #999999;
							}

							.title.c2 {
								color: #ff4500
							}
						}
					}

					.item:last-child .content {
						border-bottom: 0;
					}
				}
			}
		}
	}
</style>
