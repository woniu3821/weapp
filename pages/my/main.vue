<template>
	<view class="wrap">
		<view class="content">
			<view class="top"></view>
			<view class="head u-flex">
				<image src="../../static/img/user-head.png"  mode="aspectFit"></image>
				<view class="info">
					<view class="name">
						我是谁谁谁
					</view>
					<view class="desc">
						登陆更精彩
					</view>
				</view>
			</view>
			<view class="container list">
				<view class="item" v-for="(item,index) in list" :key="index">
					<image :src="item.icon" mode="aspectFit"></image>
					<text>{{item.title}}</text>
				</view>
			</view>
			<view class="container action">
				<u-cell-group :border="false">
					<u-cell-item title="反馈意见"></u-cell-item>
					<u-cell-item :border-bottom="false" title="联系客服"></u-cell-item>
				</u-cell-group>
			</view>
			<view class="btn">
				<u-button >退出登录</u-button>
			</view>
		</view>
		<u-tabbar :list="vuex_tabbar" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						icon: '../../static/img/ryxx.png',
						title: '人员信息'
					},
					{
						icon: '../../static/img/xxfb.png',
						title: '信息发布'
					},
					{
						icon: '../../static/img/xxck.png',
						title: '信息查看'
					}
				]
			}
		}
	}
</script>

<style>
	page {
		background-color: #f2f2f2;
	}
</style>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		position: relative;
		top: 0;
	}

	.container {
		margin: 0 auto;
		border-radius: 5rpx;
		background-color: #fff;
		padding: 35rpx;
		box-shadow: 0 3rpx 10rpx #eee;
	}

	.top {
		width: 3000rpx;
		height: 3000rpx;
		border-radius: 50%;
		background: linear-gradient(to right, #62e2b1, #33cdad);
		position: absolute;
		top: -2750rpx;
		left: 50%;
		margin-left: -1500rpx;
		z-index: -1;
	}

	.head {
		margin-left: 32rpx;
		margin-top: 40rpx;

		image {
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
			margin-right: 18rpx;
			border: 1px solid #fff;
		}

		.info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			color: #fff;

			.name {
				font-size: 34rpx;

			}

			.desc {
				font-size: 20rpx;
			}
		}
	}

	.list {
		width: 686rpx;
		margin: 50rpx auto 32rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				height: 50rpx;
				width:50rpx;
			}

			text {
				margin-top: 26rpx;
				font-size: 32rpx;
				color: #333333;
			}
		}
	}

	.action {
		width: 686rpx;
		pading-top: 0;
		padding: 0 35rpx;
	}

	.btn {
		width: 686rpx;
		margin: 32rpx auto 0
	}
</style>
