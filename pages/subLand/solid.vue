<template>
	<view class="wrap">
		<view class="item u-flex u-row-between u-bottom-line" v-for="(item,index) in list" :key="index">
			<view class="left">
				<text>{{item.Name}}</text>
			</view>
			<view  class="right">
				<text>{{item.Val}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	// postFarmlandGetmanagementunitdata
	export default {
		props: {
			params: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
			list:[]
			}
		},
		methods: {
			async postFarmlandGetmanagementunitdata() {
				let {
					regionCode,
					longitude,
					latitude
				} = this.params
				
				const [err, res] = await this.$u.api.postFarmlandGetmanagementunitdata({
					regionCode,
					longitude,
					latitude
				}, '', {
					'Content-Type': 'application/x-www-form-urlencoded'
				});
				if (err) {
					this.fail(err);
					return;
				}
				this.list=res.Rlt;
			},
		},
		mounted() {
			this.postFarmlandGetmanagementunitdata()
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0 30rpx;

	}

	.item {
		font-size: 32rpx;
		padding: 30rpx 0;
		border-bottom: 1px solid #e4e7ed;

		.left {
			color: #333333;
		}

		.right {
			color: #999999;

			image {
				width: 100rpx;
			}
		}
	}
</style>
