<template>
	<view class="wrap">
		<u-form :model="form" ref="uForm">
			<u-form-item prop="cropTypeName" label-width="0rpx">
				<u-input type="select" :select-open="pickerZuoWu" @click="pickerZuoWu = true" placeholder="选择作物" :value="form.cropTypeName" />
			</u-form-item>
			<u-form-item prop="cropVarietyName" label-width="0rpx">
				<u-input type="select" :select-open="pickerPz" @click="pickerPz = true" placeholder="选择品种" :value="form.cropVarietyName" />
			</u-form-item>
			<u-form-item prop="fertilizerType" label-width="0rpx">
				<u-input type="select" :select-open="pickerLx" @click="pickerLx = true" placeholder="施肥类型" :value="form.fertilizerType" />
			</u-form-item>
			<u-form-item prop="fertilizerManner" label-width="0rpx">
				<u-input type="select" :select-open="pickerType" @click="pickerType = true" placeholder="施肥方式" :value="form.fertilizerManner" />
			</u-form-item>
			<u-form-item prop="fertilizerTime" label-width="0rpx">
				<u-input type="select" :select-open="pickerTime" @click="pickerTime = true" placeholder="施肥时间" :value="formatTime" />
			</u-form-item>
			<u-form-item prop="fertilizerRatio" label-width="0rpx">
				<u-radio-group v-model="form.fertilizerRatio">
					<u-table padding="5">
						<u-tr>
							<u-th>选择配方</u-th>
							<u-th>总含量</u-th>
							<u-th>氮含量</u-th>
							<u-th>磷含量</u-th>
							<u-th>钾含量</u-th>
						</u-tr>
						<u-tr v-for="(item, index) in formulas" :key="index">
							<u-td>
								<u-radio :name="item.value">{{ item.value }}</u-radio>
							</u-td>
							<u-td>{{ item.total }}</u-td>
							<u-td>{{ item.nitrogen }}</u-td>
							<u-td>{{ item.phosphorus }}</u-td>
							<u-td>{{ item.potassium }}</u-td>
						</u-tr>
					</u-table>
				</u-radio-group>
				<!-- <u-input type="select" :select-open="pickerShow" @click="pickerShow = true" placeholder="推荐配方" v-model="form.username" /> -->
			</u-form-item>
			<u-form-item prop="fertilizerAmount" label-width="0rpx">
				<u-number-box :positive-integer="false" v-model="form.fertilizerAmount" placeholder="每亩用量（公斤）"></u-number-box>
			</u-form-item>
		</u-form>
		<u-button type="success" @click="submit">保存</u-button>
		<u-select v-model="pickerZuoWu" :list="cropList" @confirm="confirmZuoWu"></u-select>
		<u-select v-model="pickerPz" :list="varietiesList" @confirm="confirmPz"></u-select>
		<u-select v-model="pickerLx" :list="fertilizerTypeOptions" @confirm="confirmLx"></u-select>
		<u-select v-model="pickerType" :list="fertilizerMannerOptions" @confirm="confirmType"></u-select>
		<u-picker v-model="pickerTime" @confirm="conFirmTime" mode="time"></u-picker>
	</view>
</template>

<script>
import { typeOf } from '@/common/tools.js';
export default {
	data() {
		return {
			params: {},
			pickerZuoWu: false,
			pickerShow: false,
			pickerPz: false,
			pickerLx: false,
			pickerType: false,
			pickerTime: false,
			fertilizerMannerOptions: [
				//施肥方式
				{
					value: '1',
					label: '撒施'
				},
				{
					value: '2',
					label: '喷施'
				}
			],
			form: {
				farmlandId:'',
				cropTypeName: '',
				cropVarietyCode: '',
				cropVarietyName: '',
				fertilizerType: '',
				fertilizerManner: '撒施',
				fertilizerAmount: 1,
				fertilizerTime: '',
				fertilizerRatio: ''
			},
			formatTime: '',
			rules: {
				cropTypeName: [{ required: true, message: '请选择作物', trigger: 'change' }],
				cropVarietyName: [{ required: true, message: '请选择品种', trigger: 'change' }],
				fertilizerType: [{ required: true, message: '请选择施肥类型', trigger: 'change' }],
				fertilizerManner: [{ required: true, message: '请选择施肥方式', trigger: 'change' }],
				fertilizerTime: [{ required: true, message: '请选择施肥时间', trigger: 'change' }]
			},
			cropList: [], //作物列表
			varietiesList: [], //品种列表
			fertilizerTypeOptions: [], //施肥类型
			formulas: [],
			fertilizerInfoRlt: []
		};
	},
	methods: {
		confirmZuoWu(val) {
			this.varietiesList = val[0].extra;
			this.cropTypeName = val[0].label;
			this.form.cropTypeName = val[0].label;
			this.form.cropVarietyCode = '';
			this.form.cropVarietyName = '';
		},
		confirmPz(val) {
			this.form.cropVarietyName = val[0].label;
			this.form.cropVarietyCode = val[0].value;
			this.postFarmlandGetfertilizerdata3();
			this.form.fertilizerType = '';
		},
		confirmLx(val) {
			const { label, value, extra } = val[0];

			this.form.fertilizerAmount = +value;
			this.form.fertilizerType = label;
			const formula = extra.split(':');

			this.formulas[0] = {
				total: formula.reduce((prev, cur) => Number(prev) + Number(cur)) + '%',
				nitrogen: formula[0] + '%',
				phosphorus: formula[1] + '%',
				potassium: formula[2] + '%',
				value: extra
			};

			this.form.fertilizerRatio = extra;
		},
		confirmType(val) {
			this.form.fertilizerManner = val[0].label;
		},
		conFirmTime({ year, month, day, timestamp }) {
			this.formatTime = year + '年' + month + '月' + day + '日';
			this.form.fertilizerTime = year + '-' + month + '-' + day;
		},
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					// this.login(this.form);
					this.add();
				}
			});
		},

		async postFarmlandGetcroplist() {
			let { regionCode } = this.params;
			const [err, res] = await this.$u.api.postFarmlandGetcroplist(
				{
					regionCode
				},
				'',
				{
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			);

			if (err) {
				this.fail(err);
				return;
			}

			this.cropList = transZuoWu(res);
		},
		async postFarmlandGetfertilizerdata3(cropCode) {
			let { regionCode, longitude, latitude } = this.params;
			const [err, res] = await this.$u.api.postFarmlandGetfertilizerdata3(
				{
					cropCode: this.form.cropVarietyCode,
					regionCode,
					longitude,
					latitude,
					isTranslate: false
				},
				'',
				{
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			);

			if (err) {
				this.fail(err);
				return;
			}
			const { Rlt } = res.FertilizerInfo;
			this.fertilizerTypeOptions = Rlt.map((it, index) => {
				return { value: it.Dosage, label: it.Alias, extra: it.Formula };
			});
			this.fertilizerInfoRlt = Rlt;
		},
		async add() {
			//新增施肥
			this.load('保存中');
			const [err, res] = await this.$u.api.postFertilizerrecordAddfertilizerrecord(this.form);
			this.hide();

			if (err) {
				this.fail(err);
				return;
			}
			this.success('保存成功');
			this.$u.route({
				type:'redirect',
				url:'/pages/subLand/muck-list'
			})
		},
		async update() {
			//更新施肥
			let { regionCode, longitude, latitude } = this.params;
			const [err, res] = await this.$u.api.postFertilizerrecordUpdatefertilizerrecord(
				{
					regionCode,
					longitude,
					latitude
				},
				'',
				{
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			);

			if (err) {
				this.fail(err);
				return;
			}

			// this.fertilizerdata3 = res.data;
		}
	},
	onLoad() {
		this.params = this.vuex_landParams;
		this.farmlandId=this.vuex_landParams.id
		this.$refs.uForm && this.$refs.uForm.setRules(this.rules);
		this.postFarmlandGetcroplist();
	}
	
};

function transZuoWu(data) {
	let list = [];
	if (!data) return list;
	data.CropType.map(it => {
		list.push({
			value: '',
			label: it.Name,
			extra:
				typeOf(it.CropVariety) === 'array' ? it.CropVariety.map(it => ({ value: it.Code, label: it.Name })) : [{ value: it.CropVariety.Code, label: it.CropVariety.Name }]
		});
	});

	return list;
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
