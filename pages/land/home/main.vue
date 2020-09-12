<template>
	<view class="wrap">
		<view class="top-view">
			<view class="u-search-box">
				<u-search :show-action="false" v-model="keyword" input-align="center" placeholder="搜索地块" @search="reload"></u-search>
			</view>
		</view>
		<view class="scroll-box">
			<scroll-view scroll-y class="scroll-view" @scrolltolower="reachBottom">
				<view class="page-box">
					<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in activityData" :key="item.id" @click="click"
					 @open="open" :options="options">
						<view class="item u-border-bottom">
							<view class="title-wrap">
								<text class="title u-line-1">{{ item.title }}</text>
								<view class="bottom u-flex u-row-between">
									<text class="title u-line-1">{{ item.title }}</text>
									<text class="title u-line-1">2020年5月13号</text>
								</view>
							</view>
						</view>
					</u-swipe-action>
					<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
				</view>
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
				keyword: '',
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}]

			};
		},
		methods: {
			toMain() {
				// uni.navigateTo({
				// 	url: '/pages/outletsSub/main/index'
				// });
			},
			reload(){
				this.getActivityData(true, this.activityData.length).then(() => {
					this.flag = false
				})
				
			},
			click(index, index1) {
				if (index1 == 1) {
					this.activityData.splice(index, 1);
					this.$u.toast(`删除了第${index}个`);
				} else {
					this.list[index].show = false;
					this.$u.toast(`收藏成功`);
				}
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if (index != idx) this.list[idx].show = false;
				})
			},

			reachBottom() {
				// 当onShow的状态进行时，阻止加载更多再一次获取列表数据
				this.getActivityData()
			},
			// 页面数据
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


				cosnt[err, res] = await this.$u.api.postFarmlandQueryfarmlandspage(params)

				this.hide();
				if (err) {
					this.fail(err);
					return;
				}

				let total = res.data.total
				initList ?
					(this.activityData = res.data.data) : (this.activityData = this.activityData.concat(res.data.data))
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
		mounted() {
			if (this.init) {
				this.getActivityData(true).then(() => {
					this.init = false
				})
			}

		},
		created() {
			// 阻止onLoad触发该逻辑
			if (!this.init) {
				// 防止底部的加载更多再次获取列表数据
				this.flag = true
				this.getActivityData(true, this.activityData.length).then(() => {
					this.flag = false
				})
			}
		},
		beforeDestroy() {
			// 页面离开记录当前的页码
			this.beforePage = this.page
		},
		onReachBottom() {
			// 当onShow的状态进行时，阻止加载更多再一次获取列表数据
			!this.flag && this.getActivityData()
		},

	}
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
					display: flex;
					padding: 20rpx;
				}

				.title {
					text-align: left;
					font-size: 28rpx;
					color: $u-content-color;
					margin-top: 20rpx;
				}
			}
		}
	}
</style>
