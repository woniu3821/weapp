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
							<view class="title u-flex u-row-between">
								<view class="title u-line-1">{{ item.name }}</view>
							</view>
							<view class="bottom  u-flex u-row-between">
								<text class="title u-line-1">面积：{{item.farmlandArea}}公顷</text>
								<text class="title u-line-1">2020年5月13号</text>
							</view>
						</view>
					</u-swipe-action>
					<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
				</view>
			</scroll-view>
		</view>
		<!--圆形点击框  -->
		<view class="round-click">
			<navigator url='/pages/subLand/map/main'>
				<u-icon name="plus" size="35" color="#fff"></u-icon>
			</navigator>
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
				options: [
					{
						text: '详情',
						style: {
							backgroundColor: '#33cdad'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			};
		},
		methods: {
			reload() {
				this.getActivityData(true).then(() => {
					this.flag = false
				})

			},
			click(index, index1) {
				const {id,name,longitude,latitude,regionCode}=  this.activityData[index]
				if (index1 == 1) {
					this.postFarmlandDeletefarmland(id)
				} else {
					this.activityData[index].show=false;
					this.$nextTick(()=>{
						this.$u.route({
							type: 'to',
							url: '/pages/subLand/index',
							params:{
								name,
								id,
								longitude,
								latitude,
								regionCode
							}
						})
					})
	
					
				}
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.activityData[index].show = true;
				this.activityData.map((val, idx) => {
					if (index != idx) this.activityData[idx].show = false;
				})
			},

			reachBottom() {
				// 当onShow的状态进行时，阻止加载更多再一次获取列表数据
				this.getActivityData()
			},
			async postFarmlandDeletefarmland(farmlandId) {
				this.load()
				const [err, res] = await this.$u.api.postFarmlandDeletefarmland({}, '/'+farmlandId)
				this.hide();
				if (err) {
					this.fail(err);
					return;
				}
				this.reload()
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
				const [err, res] = await this.$u.api.postFarmlandQueryfarmlandspage(params)
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

	function tranList(data) {
		return data.map((item) => {
			return { ...item,
				show: false,
				farmlandArea:(item.farmlandArea/10000).toFixed(4)
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

			.page-box {
				.item {
					width: 100%;
					padding: 20rpx;
					box-sizing: border-box;
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
