<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<view class="pre-box" v-if="!showUploadList">
					<view class="pre-item" v-for="(item, index) in lists" :key="index">
						<image class="pre-item-image" :src="item.url" mode="aspectFill"></image>
						<view class="u-delete-icon" @tap.stop="deleteItem(index)">
							<u-icon name="close" size="20" color="#ffffff"></u-icon>
						</view>
						<u-line-progress v-if="item.progress > 0 && !item.error" :show-percent="false" height="16" class="u-progress"
						 :percent="item.progress"></u-line-progress>
					</view>
				</view>
				<u-upload ref="uUpload"  :show-upload-list="true" :action="action" :auto-upload="true" :file-list="fileList"
				 :show-progress="showProgress" :deletable="deletable" :max-count="maxCount" @on-list-change="onListChange">
				</u-upload>
			</view>
		</view>
	</view>
</template>

<script>
	import config from '@/common/config.js'
	export default {
		props:{
			list:{
				type:Array,
				default:()=>[]
			}
		},
		data() {
			return {
				action: config.baseUrl+'/heter-web-api/file/fileUpload',
				showProgress: true,
				deletable: true,
				customStyle: false,
				maxCount: 4,
				lists: [], // 组件内部的文件列表
			}
		},
		computed:{
			fileList(){
				return this.list
			}
		},
		onLoad() {
			
		},
		methods: {
			reUpload() {
				this.$refs.uUpload.reUpload();
			},
			// clear() {
			// 	this.$refs.uUpload.clear();
			// },
			// upload() {
			// 	this.$refs.uUpload.upload();
			// },
			deleteItem(index) {
				this.$refs.uUpload.remove(index);
			},
			onOversize(file, lists) {
				// console.log('onOversize', file, lists);
			},
			onPreview(url, lists) {
				// console.log('onPreview', url, lists);
			},
			onRemove(index, lists) {
				// console.log('onRemove', index, lists);
			},
			onSuccess(data, index, lists) {
				// console.log('onSuccess', data, index, lists);
			},
			onChange(res, index, lists) {
				// console.log('onChange', res, index, lists);
			},
			error(res, index, lists) {
				// console.log('onError', res, index, lists);
			},
			onProgress(res, index, lists) {
				// console.log('onProgress', res, index, lists);
			},
			onUploaded(lists) {
				// console.log('onUploaded', lists);
			},
			onListChange(lists) {
				this.lists = lists;
				this.$emit('on-upload-change',lists)
			},
		}
	}
</script>

<style lang="scss">
	.u-demo-wrap {
		background-color: #FFFFFF;
		padding: 40rpx 8rpx;
		margin-left: -14rpx;
		margin-right: -14rpx;
	}
	
	.u-add-wrap {
		flex-direction: column;
		color: $u-content-color;
		font-size: 28rpx;
	}
	
	/deep/ .slot-btn {
		width: 329rpx;
		height: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
	}

	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}

	.pre-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.pre-item {
		flex: 0 0 48.5%;
		border-radius: 10rpx;
		height: 140rpx;
		overflow: hidden;
		position: relative;
		margin-bottom: 20rpx;
	}

	.u-progress {
		position: absolute;
		bottom: 10rpx;
		left: 8rpx;
		right: 8rpx;
		z-index: 9;
		width: auto;
	}

	.pre-item-image {
		width: 100%;
		height: 140rpx;
	}

	.u-delete-icon {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		z-index: 10;
		background-color: $u-type-error;
		border-radius: 100rpx;
		width: 44rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
