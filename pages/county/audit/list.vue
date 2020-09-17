<template>
	<!-- 商户列表 -->
	<view class="wrap">
		<view class="top-view">
			<view class="u-search-box">
				<u-search :show-action="false" v-model="keyword" input-align="center" placeholder="搜索" @search="reload"></u-search>
			</view>
			<view class="filter-overview">
				<view class="title u-flex" @tap="changeEye">
					<text class="text">待审商户总览</text>
					<u-icon size="40" :name="isEye?'eye':'eye-off'"></u-icon>
				</view>
				<view class="content u-flex u-row-between">
					<view class="left">
						<view class="label">
							大户总数
						</view>
						<view class="num">
							<text>10000</text><text class="unit">户</text>
						</view>
					</view>
	<!-- 				<view class="right">
						<view class="label">
							总面积
						</view>
						<view class="num">
							<text>98000</text><text class="unit">亩</text>
						</view>
					</view> -->
				</view>
			</view>
		</view>
		<view class="scroll-box">
			<scroll-view scroll-y class="scroll-view" @scrolltolower="reachBottom">
				<view class="page-box">
					<view class="item" v-for="(item, index) in activityData" :key="index">
						<view class="left">
							<image src="@/static/img/user.png" mode="aspectFill"></image>
						</view>
						<view class="content" @tap="toMain">
							<view class="title u-line-1">{{ item.title }}</view>
						</view>
					</view>
					<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import mixins from '@/common/loadMixins.js'
	export default {
		mixins:[mixins],
		data() {
			return {
				isEye: true,
				value: '',
				service:'postAnnouncementQueryannouncementspage'
			};
		},
		computed:{
			params(){
				return {
					pageNum: this.page,
					pageSize:this.pageSize,
					keyword: this.keyword
				}
			}
		},
		methods: {
			toView(item) {
				const {
					id,
					title,
					content
				} = item

				this.$u.route({
					type: 'to',
					url: '/pages/county/audit/audit',
					params: {
						id,
						title,
						content
					}
				})
			},
		
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #fff;
	}
</style>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		overflow: hidden;

		.top-view {
			flex-shrink: 0;
			background-color: #F2F2F2;

			.u-search-box,
			.u-search-filter {
				padding: 18rpx 30rpx;
				background-color: #fff;

				.text {
					font-size: 32rpx;
					color: #333;
					margin-right: 16rpx;
				}
			}

			.refresh {
				width: 36rpx;
				height: 36rpx;
			}

			.u-search-box {
				border-bottom: 10rpx solid #f2f2f2;

			}

			.filter-overview {
				margin: 20rpx;
				padding: 30rpx 40rpx;
				border-radius: 10rpx;
				background: linear-gradient(to right, #62e2b1, #33cdad);
				color: #fff;

				.title {
					font-size: 36rpx;

					.text {
						font-weight: 400;
						margin-right: 10rpx;
					}
				}

				.content {
					padding: 0 8rpx;
					margin-top: 30rpx;

					.label {
						font-size: 30rpx;
					}

					.num {
						margin-top: 10rpx;
						font-size: 40rpx;

						.unit {
							font-size: 24rpx;
							margin-left: 20rpx;
							vertical-align: text-bottom;
						}
					}
				}

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
						padding-right: 30rpx;

						.left {
							padding: 30rpx;

							image {
								width: 60rpx;
								height: 60rpx;
							}
						}

						.content {
							padding: 30rpx 0;
							border-bottom: 1px solid #e4e7ed;
							flex: 1;

							.title {
								font-size: 32rpx;
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
