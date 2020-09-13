<template>
	<view class="wrap">
		<view class="top-view">
			<view class="u-search-box">
				<u-search :show-action="false" v-model="keyword" input-align="center" placeholder="搜索公告" @search="reload"></u-search>
			</view>
		</view>
		<view class="scroll-box">
			<scroll-view scroll-y class="scroll-view" @scrolltolower="reachBottom">
				<view class="item u-flex u-row-between" @click="toView(item)" v-for="(item,index) in activityData" :key="item.id">
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
	export default {
		data() {
			return {
				activityData: [],
				loadStatus: 'loadmore',
				init: true,
				flag: false,
				page: 1,
				pageSize: 10,
				beforePage: 1,
				keyword: ''
			};
		},
		methods: {
			reload() {
				this.getActivityData(true).then(() => {
					this.flag = false
				})

			},
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
			reachBottom() {
				// 当onShow的状态进行时，阻止加载更多再一次获取列表数据
				this.getActivityData()
			},
			async getActivityData(initList = false, nowPageSize) {
				if (initList) {
					this.page = 1
				}

				let params = {
					pageNum: this.page,
					pageSize: nowPageSize || this.pageSize,
					keyword: this.keyword
				}

				this.loadStatus = 'loading'
				initList && this.load('加载中')
				const [err, res] = await this.$u.api.postAnnouncementQueryannouncementspage(params)
				this.hide();
				if (err) {
					this.fail(err);
					return;
				}

				const total = res.total;

				initList ?
					(this.activityData = tranList(res.data)) : (this.activityData = this.activityData.concat(tranList(res.data)))
				this.page = this.page + 1
				// 如果本次有传nowPageSize，将page还原为跳转前的页码，下一次再获取更多接着之前的页码和页数进行获取
				if (nowPageSize) {
					this.page = this.beforePage
				}
				if (this.activityData.length < total) {
					this.loadStatus = 'loadmore'
				} else {
					this.loadStatus = 'nomore'
				}
			}
		},
		onLoad() {
			if (this.init) {
				this.getActivityData(true).then(() => {
					this.init = false
				})
			}

		},
		onShow() {
			// 阻止onLoad触发该逻辑
			if (!this.init) {
				// 防止底部的加载更多再次获取列表数据
				this.flag = true
				this.getActivityData(true, this.activityData.length).then(() => {
					this.flag = false
				})
			}
		},
		onHide() {
			// 页面离开记录当前的页码
			this.beforePage = this.page
		},
		onReachBottom() {
			// 当onShow的状态进行时，阻止加载更多再一次获取列表数据
			!this.flag && this.getActivityData()
		},

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
