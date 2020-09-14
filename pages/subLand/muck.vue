<template>
	<view class="wrap">
		<u-form :model="form" ref="uForm">
			<u-form-item prop="cropTypeName" label-width="0rpx">
				<u-input type="select" :select-open="pickerShow" @click="pickerShow = true" placeholder="选择作物" v-model="form.cropTypeName" />
			</u-form-item>
			<u-form-item prop="cropVarietyCode" label-width="0rpx">
				<u-input type="select" :select-open="pickerShow" @click="pickerShow = true" placeholder="选择品种" v-model="form.username" />
			</u-form-item>
			<u-form-item prop="fertilizerType" label-width="0rpx">
				<u-input type="select" :select-open="pickerShow" @click="pickerShow = true" placeholder="施肥类型" v-model="form.username" />
			</u-form-item>
			<u-form-item prop="fertilizerManner" label-width="0rpx">
				<u-input type="select" :select-open="pickerShow" @click="pickerShow = true" placeholder="施肥方式" v-model="form.username" />
			</u-form-item>
			<u-form-item prop="fertilizerTime" label-width="0rpx">
				<u-input type="select" :select-open="pickerTime" @click="pickerTime = true" placeholder="施肥时间" v-model="form.username" />
			</u-form-item>
			<u-form-item prop="fertilizerRatio" label-width="0rpx">
				<u-input type="select" :select-open="pickerShow" @click="pickerShow = true" placeholder="推荐配方" v-model="form.username" />
			</u-form-item>
			<u-form-item prop="fertilizerAmount" label-width="0rpx">
				<u-input type="select" :select-open="pickerShow" @click="pickerShow = true" placeholder="每亩用量（公斤）" v-model="form.username" />
			</u-form-item>
		</u-form>
		<u-button type="success" @click="submit">保存</u-button>
		<u-select v-model="pickerShow" :list="list" @confirm="confirm"></u-select>
		<u-picker v-model="pickerTime" @confirm="conFirmTime" mode="time"></u-picker>
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
				pickerShow: false,
				value: '',
				pickerTime:false,
				list: [{
						value: '1',
						label: '作物名称'
					},
					{
						value: '2',
						label: '品种名称'
					}
				],
				form: {
					farmlandId: '',
					cropTypeName: '',
					cropVarietyCode: '',
					fertilizerType:'',
					fertilizerManner:'',
					fertilizerTime:'',
					fertilizerRatio:''
					
				},
				rules: {
					username: [{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}]
				},

			}
		},
		methods: {
			confirm(val) {
				console.log(val)
				this.value = val.label
			},
			conFirmTime(val){
				console.log(val)
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// this.login(this.form);
					}
				});
			},
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
				this.list = res.Rlt;
			},
		},
		mounted() {
			this.$refs.uForm && this.$refs.uForm.setRules(this.rules);

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 0 30rpx;

	}

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
		}

		.title {
			flex: 1;
			text-align: left;
			font-size: 28rpx;
			color: #333;
		}
	}
</style>
