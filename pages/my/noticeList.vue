<template>
	<view class="wrap">
		<view class="top-view">
			<view class="u-search-box">
				<u-search :show-action="false" v-model="keyword" input-align="center" placeholder="搜索公告" @search="reload"></u-search>
			</view>
		</view>
		<view class="scroll-box">
			<scroll-view scroll-y class="scroll-view" @scrolltolower="reachBottom">
				<view class="item u-flex u-row-between" @click="toView(item)" v-for="(item,index) in list" :key="item.id">
					<view class="left u-flex u-row-between">
						<view :class="['dot',{active:!item.isRead}]"></view>
						<view class="title u-line-1">
							{{item.title}}
						</view>
					</view>
					<view class="right u-flex">
						<view class="content title u-line-1">
							{{item.createTime}}
						</view>
						<u-icon name="arrow-right" color="#999999"></u-icon>
					</view>
				</view>
				<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
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
				service: 'postAnnouncementQueryannouncementspage'
			};
		},
		computed:{
			params(){
				return {
					pageNum: this.page,
					pageSize:this.pageSize,
					keyword: this.keyword
				}
			},
			list(){
				return tranList(this.activityData)
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
					url: '/pages/my/notice',
					params: {
						id,
						title,
						content
					}
				})
			},
			
		}

	}

	function tranList(data) {
		return data.map((item) => {
			return { ...item,
				show: false,
				farmlandArea: (item.farmlandArea / 10000).toFixed(4)
			}
		})
	}
</script>

<style lang="scss" scoped>
	.round-click {
		height: 120rpx;
		width: 120rpx;
		background-color: #50dab0;
		border-radius: 100%;
		position: fixed;
		bottom: 150rpx;
		right: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9;
	}

	.round-click navigator {
		font-size: 32rpx;
		max-width: 80rpx;
		color: #fff;
		text-align: center;
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


			.item {
				padding: 30rpx 0;
				box-sizing: border-box;
				border-bottom: 1px solid #e4e7ed;
				margin: 0 30rpx;

				.left {
					width: 49%;

					.dot {
						width: 10rpx;
						height: 10rpx;
						border-radius: 50%;
						background-color: #bbbbbb;
						margin-right: 10rpx;
					}

					.dot.active {
						background-color: #50dab0;
					}
				}

				.right {
					width: 49%;

					.content {
						text-align: right;
						padding-right: 10rpx;
						color: #999999;
					}
				}

				.title {
					flex: 1;
					text-align: left;
					font-size: 28rpx;
					color: #333;
				}
			}



		}
	}
</style>
