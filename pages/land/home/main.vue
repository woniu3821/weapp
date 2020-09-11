<template>
	<view class="wrap">
		<view class="top-view">
			<view class="u-search-box"><u-search :show-action="false" v-model="search" input-align="center" placeholder="搜索地块" @search="reload"></u-search></view>
		</view>
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
		<u-tabbar :list="vuex_tabbar" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderList: [
				{
					title: '【百搭日系甜美风'
				},
				{
					title: '女短款百搭日系甜美风原创jk制服女2020新款'
				}
			],
			loadStatus: 'loadmore'
		};
	},
	methods: {
		reload() {},
		toMain() {
			// uni.navigateTo({
			// 	url: '/pages/outletsSub/main/index'
			// });
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
	},
	onLoad() {
		this.getOrderList();
	}
};
</script>

<style lang="scss" scoped>
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

.top-view {
	flex-shrink: 0;
	background-color: #f2f2f2;

	.u-search-box {
		border-bottom: 10rpx solid #f2f2f2;
		padding: 18rpx 30rpx;
		background-color: #fff;
	}
}

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
						color: #ff4500;
					}
				}
			}

			.item:last-child .content {
				border-bottom: 0;
			}
		}
	}
}
</style>
