<template>
	<view class="wrap">
		<view class="tip"><u-alert-tips type="warning" show-icon title="标记注意事项:" :description="description"></u-alert-tips></view>
		<view class="map_container"><map v-if="renderShow" enable-satellite show-location @tap="makertap" class="map" id="mapArea" :markers="markers" :longitude="longitude" :latitude="latitude" :polygons="polygon"></map></view>
		<view class="content">
			<u-form :model="form" ref="uForm" label-width="150">
				<u-form-item label="中心坐标"><u-input disabled :value="pointText" /></u-form-item>
				<u-form-item label="农田面积" prop="farmlandArea"><u-input disabled :value="form.farmlandArea" /></u-form-item>
				<u-form-item label="农田名称" prop="name"><u-input v-model="form.name" /></u-form-item>
				<u-form-item label="所在地区" prop="countyCode">
					<u-input type="select" :select-open="pickerShow" :value="areaText" placeholder="请选择地区" @click="pickerShow = true"></u-input>
				</u-form-item>
				<u-form-item label-position="top" label="详细地址" prop="address"><u-input type="textarea" placeholder="请输入详细地址" v-model="form.address" /></u-form-item>
				<u-form-item label-position="top" label="备注" prop="remark"><u-input type="textarea" v-model="form.remark" /></u-form-item>
			</u-form>
		</view>
		<view class="deal u-flex u-row-between">
			<u-button style="width:49%" @click="clearPoint" type="default">清除标记</u-button>
			<u-button style="width:49%" @click="submit" type="success">保存</u-button>
		</view>
		<u-select v-model="pickerShow" mode="mutil-column-auto" :list="list" @confirm="regionConfirm"></u-select>
	</view>
</template>

<script>
import { bMapToQQMap, QQMapTobMap } from '@/common/tools.js';
import { getCenter, getZoom } from '@/common/mapUtil.js';
import Bar from '@/components/bar.vue';
export default {
	components: {
		Bar
	},
	data() {
		return {
			renderShow:false,
			longitude:'',
			latitude: '',
			pickerShow: false,
			selectList: [],
			form: {
				name: '',
				longitude: '',
				latitude: '',
				farmlandCoordinates: [],
				farmlandArea: '',
				provinceCode: '',
				cityCode: '',
				countyCode: '',
				address: '',
				remark: ''
			},
			list: [],
			description: '请依次按顺序选择坐标点，三个点以上有效，如出现坐标交叉可清除重新标记',
			fullHeight: '',

			polygon: [
				{
					points: [],
					fillColor: '#19be6b33',
					strokeColor: '#fff',
					strokeWidth: 1
				}
			],
			markers: [],
			allpoint: [],
			centerPoint: '',
			rules: {
				countyCode: [
					{
						required: true,
						message: '请选择地区',
						type: 'number',
						trigger: ['change', 'blur']
					}
				],
				farmlandArea: [
					{
						required: true,
						message: '请在地图选择区域'
					}
				],
				name: [
					{
						required: true,
						message: '请填写名称'
					}
				],
				address: [
					{
						required: true,
						message: '请填写详细地址'
					}
				]
			}
		};
	},
	computed: {
		pointText() {
			if (this.centerPoint) {
				return `${this.centerPoint.lng.toFixed(2)},${this.centerPoint.lat.toFixed(2)}`;
			}
			return '-';
		},
		areaText() {
			return this.selectList.map(it => it.label).join('-');
		}
	},
	watch: {
		vuex_permission() {
			this.getLocation();
		}
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.postFarmlandAddfarmland();
				}
			});
		},
		// 选择地区回调
		regionConfirm(list) {
			this.selectList = list;
			this.form = Object.assign({}, this.form, {
				provinceCode: list[0].value,
				cityCode: list[1].value,
				countyCode: list[2].value
			});
		},
		clearPoint() {
			this.polygon = [
				{
					points: [],
					fillColor: '#19be6b33',
					strokeColor: '#fff',
					strokeWidth: 1
				}
			];
			this.markers = [];
			this.centerPoint = '';
			this.form.farmlandCoordinates = [];
			this.form.longitude = '';
			this.form.latitude = '';
			this.form.farmlandArea = '';
		},
		async getRegin() {
			const [err, res] = await this.$u.api.postChinaareaListchinaareatree({}, '', { auth: false });
			if (err) {
				this.fail(err);
				return;
			}
			this.list = trasRegion(res);
		},
		async makertap(e) {
			let point = { longitude: e.detail.longitude, latitude: e.detail.latitude };
			this.polygon[0].points.push(point);

			this.allpoint.push(point);

			if (this.allpoint.length > 2) {
				const points = transPointsToBD(this.allpoint);

				this.form.farmlandCoordinates = JSON.stringify(points);

				let centerPoint = await this.getCenterPoint(points);
				let area = await this.getArea(points);

				this.centerPoint = centerPoint;

				const markerCenter = transPointsToQQ(centerPoint);

				this.form.longitude = centerPoint.lng;
				this.form.latitude = centerPoint.lat;
				this.form.farmlandArea = area;

				this.markers = [
					{
						...markerCenter,
						iconPath: '../../../static/img/point_c.png',
						width: 18,
						height: 18
					}
				];
				
			}
		},
		async getCenterPoint(points) {
			const [err, res] = await this.$u.api.postFarmlandGetmapcenter(points);
			if (err) {
				this.fail(err);
				return;
			}
			return res;
		},
		async getArea(points) {
			const [err, res] = await this.$u.api.postFarmlandComputesignedarea(points);
			if (err) {
				this.fail(err);
				return;
			}
			return res;
		},
		async postFarmlandAddfarmland() {
			this.load();
			const [err, res] = await this.$u.api.postFarmlandAddfarmland(this.form);
			if (err) {
				this.fail(err);
				return;
			}
			this.hide();
			this.load('新增成功跳转中');
			setTimeout(() => {
				uni.redirectTo({
					url: '/pages/login/index'
				});
			}, 3000);
		},
		getLocation() {
			if (this.vuex_permission) {
				uni.getLocation({
					type: 'gcj02 ',
					success: location => {
						if (location) {
							this.longitude = location.longitude;
							this.latitude = location.latitude;
							
							this.renderShow=true;
						}
					}
				});
			}
		}
		
		// postFarmlandQueryfarmlandspage
	},
	onShow() {
		// uni.setNavigationBarTitle({
		// 	title: this.$t('nav.home')
		// });

		this.getRegin();
	},
	onLoad() {
		this.getLocation();
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};

function transPointsToBD(data) {
	return data.map(item => {
		const { longitude, latitude } = QQMapTobMap(item.longitude, item.latitude);
		return { lng: longitude, lat: latitude };
	});
}
function transPointsToQQ(data, simple = true) {
	if (simple) {
		return bMapToQQMap(data.lng, data.lat);
	}
	return data.map(item => {
		const { lng, lat } = QQMapTobMap(item.lng, item.lat);
		return { longitude: lng, latitude: lat };
	});
}

function trasRegion(data) {
	if (!data || !data.length) {
		return [];
	}
	return data.map(it => {
		const obj = { value: it.value, label: it.name };
		if (it.children && it.children.length) {
			obj.children = trasRegion(it.children);
		}
		return obj;
	});
}
</script>

<style lang="scss" scoped>
.map {
	width: 100%;
	height: 600rpx;
}
.deal {
	padding: 30rpx;
}
.tip {
	padding: 30rpx;
}
.content {
	padding: 30rpx;
}
.view {
	font-size: 30rpx;
	line-height: 60rpx;
	color: #333;
}
</style>
