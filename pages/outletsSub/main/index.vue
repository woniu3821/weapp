<template>
	<view class="wrap">
		<view class="container list">
			<view class="item" @tap="setTitle(index)" v-for="(item,index) in list" :key="index">
				<image :src="item.icon" mode="aspectFit"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view v-if="active===0" class="container">
			<title-bar>工商信息</title-bar>
			<view class="image-box">
				<image src="../../../static/img/gsxxb.png" mode="aspectFit"></image>
			</view>
		</view>
		<view v-else-if="active===1" class="container">
			<title-bar>肥料质检报告</title-bar>
			<view class="image-box">
				<image src="../../../static/img/zjbb.png" mode="aspectFit"></image>
			</view>
		</view>
		<template v-else>
			<view class="container scroll">
				<title-bar>商品管理</title-bar>
				<view class="scroll-box">
					<scroll-view scroll-y class="scroll-view" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="item" v-for="(item, index) in orderList" :key="index">
								<view class="left">
									<u-image width="140" height="140" src="https://cdn.uviewui.com/uview/example/fade.jpg">
										<view slot="error" style="font-size: 24rpx;">加载失败</view>
									</u-image>
								</view>
								<view class="content" @tap="toMain">
									<view class="title u-line-1">{{ item.title }}</view>
									<view class="title u-line-1 c1">{{ item.title }}</view>
									<view class="title u-line-1 c2">{{ item.title }}</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</view>
			</view>
		</template>
	</view>
</template>
<script>
	import List from './list.vue'
	export default {
		components: {
			List
		},
		data() {
			return {
				orderList: [{
						title: '【百搭日系甜美风'
					},
					{
						title: '女短款百搭日系甜美风原创jk制服女2020新款'
					}
				],
				loadStatus: 'loadmore',
				current: 0,
				active: 1,
				list: [{
						icon: '../../../static/img/gsxx.png',
						title: '工商信息'
					},
					{
						icon: '../../../static/img/zjbg.png',
						title: '肥料质检报告'
					},
					{
						icon: '../../../static/img/spgl.png',
						title: '商品管理'
					}
				]
			}
		},
		onLoad() {
			this.getOrderList();
		},
		methods: {
			setTitle(idx) {
				this.active = idx;
			},
			toMain() {
				uni.navigateTo({
					url: '/pages/outletsSub/main/index'
				});
			},
			reachBottom() {
				// 此tab为空数据
				if (this.current != 2) {
					this.loadStatus = 'loading';
					setTimeout(() => {
						this.getOrderList();
					}, 1200);
				}
			},
			// 页面数据
			getOrderList() {
				for (let i = 0; i < 50; i++) {
					let data = {
						title: '制服女2020新款'
					};
					data.id = this.$u.guid();
					this.orderList.push(data);
				}
				this.loadStatus = 'loadmore';
			}
		}
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
		padding: 35rpx;
		box-shadow: 0 3rpx 10rpx #eee;
	}

	.list {

		margin: 16rpx auto;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;

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
		padding:16rpx;

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
							width:100%;
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
							.title.c1{
								color: #999999;
							}
							.title.c2{
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
