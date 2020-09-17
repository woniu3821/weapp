<template>
	<view class="wrap">
		<view class="top-view">
			<view class="u-search-box"><u-search :show-action="false" v-model="keyword" input-align="center" placeholder="搜索商品" @search="reload"></u-search></view>
		</view>
		<view class="scroll-box">
			<scroll-view scroll-y class="scroll-view" @scrolltolower="reachBottom">
				<view class="item u-flex u-row-between" @click="toView(item)" v-for="(item, index) in list" :key="item.id">
					<view class="left u-flex u-row-between"><image :src="item.fullPathMajorImg" @click="viewImag(item.fullPathMajorImg)" mode="aspectFit"></image></view>
					<view class="right">
						<view class="title u-flex u-row-between u-line-1">
							<text>{{ item.name }}</text>
							<text @click="toEdite(item)" style="color:#18b566">编辑</text>
						</view>
						<view class="type">杀菌剂</view>
						<view class="status">
							<text style="color:#909399" v-if="item.status == 0">未上架</text>
							<text style="color:#19be6b" v-else-if="item.status == 1">已上架</text>
							<text style="color:#ff9900" v-else-if="item.status == 2">已下架</text>
						</view>
					</view>
				</view>
				<u-loadmore :status="loadStatus" bgColor="#f2f2f2"></u-loadmore>
			</scroll-view>
		</view>
		<u-modal v-model="show" width="90%" :show-title="false">
			<view class="slot-content"><image :src="url" mode="widthFix"></image></view>
		</u-modal>
	</view>
</template>

<script>
import mixins from '@/common/loadMixins.js';
export default {
	mixins: [mixins],
	data() {
		return {
			service: 'postGoodsQuerygoodsspage',
			show: false,
			url: ''
		};
	},
	computed: {
		params() {
			return {
				pageNum: this.page,
				pageSize: this.pageSize,
				keyword: this.keyword
			};
		},
		list() {
			return tranList(this.activityData);
		}
	},
	methods: {
		viewImag(url) {
			this.url = url;
			this.show = true;
		},
		toEdite(item) {
			this.$u.route({
				type: 'to',
				url: '/pages/business/goods/edite',
				params: {
					...item
				}
			});
		}
	}
};

function tranList(data) {
	return data.map(item => {
		return { ...item, show: false, farmlandArea: (item.farmlandArea / 10000).toFixed(4) };
	});
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
				width: 120rpx;
				height: 120rpx;
			}

			.right {
				flex: 1;
				flex-direction: column;
				justify-content: space-between;
				font-size: 28rpx;
				color: #333;
				.type {
					color: #999999;
				}
			}
		}
	}
}
</style>
