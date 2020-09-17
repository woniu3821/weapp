<template>
<!-- 商户审核-待审商户 -->
	<view class="wrap">
		<view class="item u-flex u-row-between u-bottom-line" v-for="(item,index) in list" :key="index">
			<view class="left">
				<text>{{item.title}}</text>
			</view>
			<view v-if="item.content" class="right">
				<text>{{item.content}}</text>
			</view>
			<view v-if="item.image" class="right">
				<image :src="item.image" @click="viewImag(item.image)" mode="widthFix"></image>
			</view>
		</view>
		<u-button type="success" @click="submit">审核</u-button>
		<u-modal v-model="show" width="90%" :show-title="false">
			<view class="slot-content">
				<image :src="url" mode="widthFix"></image>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				url: ''
			}
		},
		computed: {
			list() {

				const {
					departmentName,
					mobile,
					fullAddress,
					licenceCopyImg,
					certificateMapImg
				} = this.vuex_user

				return [
				{
					title: '单位名称',
					content: departmentName
				}, 
				{
					title: '商户类型',
					content: departmentName
				}, 
	
				{
					title: '营业执照副本',
					image: licenceCopyImg
				},
				{
					title: '负责人',
					content: departmentName
				}, 
				{
					title: '联系电话',
					content: mobile
				}, {
					title: '申请入驻时间',
					content: fullAddress
				}
				]
			}
		},
		methods: {
			viewImag(url) {
				this.url = url;
				this.show = true;
			},
			submit(){},
			// async getPeople() {

			// 	const [err, res] = await this.$u.api.postUcUserGetuserbasicinfo();
			// 	if (err) {
			// 		this.fail(err);
			// 		return;
			// 	}
			// },
			// 	onLoad() {

			// 		this.getPeople()
			// 	}
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
