<template>
	<view class="wrap">
		<view class="title">
			{{data.title}}
		</view>
		<u-gap height="30" bg-color="#f2f2f2"></u-gap>
		<view class="content">
			<image class="img" src="../../static/img/rz.png" mode="widthFix"></image>
			{{data.content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {}
			}
		},
		methods: {
			async setRead(announcementId) {

				const [err, res] = await this.$u.api.postAnnouncementReadannouncement({
					announcementId
				}, '', {
					'Content-Type': 'application/x-www-form-urlencoded'
				});
				if (err) {
					this.fail(err);
					return;
				}
			},
		},
		onLoad(detail) {
			this.data = detail;
			this.setRead(detail.id)
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {}

	.title {
		padding: 28rpx 32rpx;
		font-size: 32rpx;
		color: #333;
	}

	.img {
		position: absolute;
		top: 9rpx;
		left: 17rpx;
		width: 73rpx;
		z-index: -1;
	}

	.content {
		padding: 52rpx 38rpx;
		position: relative;
		text-indent: 2em;
		font-size: 30rpx;
		line-height: 60rpx;
	}
</style>
