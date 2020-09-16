<template>
	<view class="wrap">
		<view class="top-view">
			<view class="u-search-box">
				<u-search :show-action="false" v-model="keyword" input-align="center" placeholder="搜索记录" @search="reload"></u-search>
			</view>
		</view>
		<view class="scroll-box">
			<scroll-view scroll-y class="scroll-view" @scrolltolower="reachBottom">
				<view v-for="(item, index) in activityData" :key="item.id">
					<view class="item u-flex u-row-between" @click="toEdite(item)">
						<view class="left u-flex u-row-between">
							<view class="title u-line-1">{{ item.fertilizerTime }}</view>
						</view>
						<view class="right u-flex btn">
							<view class="content del" @click="showDel(item.id)">
								<image class="icon" src="../../static/img/delete.png" mode="widthFix"></image>
							</view>
							<!-- <view class="edite"><image class="icon" src="../../static/img/edite.png" mode="widthFix"></image></view> -->
						</view>
					</view>
					<view class="item u-flex u-row-between">
						<view class="left u-flex u-row-between">
							<view class="title u-line-1">作物类型</view>
						</view>
						<view class="right u-flex">
							<view class="content title u-line-1">{{ item.cropTypeName }}</view>
						</view>
					</view>
					<view class="item u-flex u-row-between">
						<view class="left u-flex u-row-between">
							<view class="title u-line-1">施肥方式</view>
						</view>
						<view class="right u-flex">
							<view class="content title u-line-1">{{ item.fertilizerManner }}</view>
						</view>
					</view>
					<view class="item u-flex u-row-between" @click="topFormula(item)">
						<view class="left u-flex u-row-between">
							<view class="title u-line-1">肥料配方</view>
						</view>
						<view class="right u-flex">
							<view class="content title u-line-1"></view>
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="item u-flex u-row-between no-border">
						<view class="left u-flex u-row-between">
							<view class="title u-line-1">每亩用量（公斤）</view>
						</view>
						<view class="right u-flex">
							<view class="content title u-line-1">{{ item.fertilizerAmount }}</view>
						</view>
					</view>
					<u-gap height="30" bg-color="#f2f2f2"></u-gap>
				</view>
				<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
			</scroll-view>
		</view>
		<u-modal v-model="show" ref="uModal" @confirm="confirm" :content="''" :async-close="true" :show-cancel-button="true"
		 title="确定删除吗？"></u-modal>
	</view>
</template>

<script>
	import mixins from '@/common/loadMixins.js'
	export default {
		mixins: [mixins],
		data() {
			return {
				fertilizerRecordId: '',
				show: false,
				service: 'postFertilizerrecordQueryfertilizerrecordspage'
			};
		},
		computed: {
			params() {
				return {
					pageNum: this.page,
					pageSize: this.pageSize,
					keyword: this.keyword
				}
			}
		},
		methods: {
			// toEdite(item) {
			// 	this.$u.route({
			// 		url: '/pages/subLand/muck',
			// 		params: {
			// 			data: item,
			// 			edite:true
			// 		}
			// 	});
			// },
			topFormula(item) {
				const {
					fertilizerRatio
				} = item;
				const formula = fertilizerRatio.split(':');
				const formulas = [];

				formulas.push({
					total: formula.reduce((prev, cur) => Number(prev) + Number(cur)) + '%',
					nitrogen: formula[0] + '%',
					phosphorus: formula[1] + '%',
					potassium: formula[2] + '%',
					value: fertilizerRatio
				});

				this.$u.route({
					type: 'to',
					url: '/pages/subLand/formula',
					params: {
						data: JSON.stringify(formulas)
					}
				});
			},
			showDel(id) {
				this.fertilizerRecordId = id;
				this.show = true;
			},
			async confirm() {
				const [err, res] = await this.$u.api.postFertilizerrecordDeletefertilizerrecord({}, '/' + this.fertilizerRecordId);
				if (err) {
					this.fail(err);
					this.$refs.uModal.clearLoading();
					return;
				}
				this.show = false;
				this.success('删除成功');
				this.reload();
			}
		}
	};
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

					.icon {
						width: 32rpx;
					}

					.del {
						margin-right: 20rpx;
					}
				}

				.right.btn {
					width: auto;
				}

				.title {
					flex: 1;
					text-align: left;
					font-size: 28rpx;
					color: #333;
				}
			}

			.item.no-border {
				border-bottom: none;
			}
		}
	}
</style>
