<template>
	<view class="wrap">
		<view class="content">
			<view class="top"></view>
			<view class="head u-flex">
				<image src="../../static/img/user-head.png"  mode="aspectFit"></image>
				<view class="info">
					<view class="name">
						{{vuex_user.nickname}}
					</view>
				</view>
			</view>
			<view class="container list">
				<view class="item" v-for="(item,index) in list" :key="index" @click="toView(item.path)">
					<image :src="item.icon" mode="aspectFit"></image>
					<text>{{item.title}}</text>
				</view>
			</view>
<!-- 			<view class="container action">
				<u-cell-group :border="false">
					<u-cell-item title="反馈意见"></u-cell-item>
					<u-cell-item :border-bottom="false" title="联系客服"></u-cell-item>
				</u-cell-group>
			</view> -->
			<view class="btn">
				<u-button @click="logout">退出登录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {listMap} from './libs.js'
	
	export default {
		data() {
			return {
			
			}
		},
		methods:{
			toView(path){
				this.$u.route({
					type:'to',
					url:path
				})
			},
			async logout(){
				const [err, res] = await this.$u.api.postAuthLogout();
				if (err) {
					this.fail(err);
					return;
				}
				this.$u.route({
					type: 'reLaunch',
					url: '/pages/login/load'
				});
			}
		},
		computed:{
			list(){
				return listMap[this.vuex_type]
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
			align-items: center;
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
