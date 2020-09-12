<template>
	<view class="wrap">
		<view class="map_container"><map :scale="zoom" class="map" id="map" :markers="markers" :longitude="longitude" :latitude="latitude" :polygons="polygon"></map></view>
	</view>
</template>

<script>
import { bMapToQQMap } from '@/common/tools.js';
import { getCenter, getZoom } from '@/common/mapUtil.js';
var wxMarkerData = [
	{ longitude: '116.408887', latitude: '39.913229' },
	{ longitude: '116.39455 ', latitude: '39.910932' },
	{ longitude: '116.391424', latitude: '39.918597' },
	{ longitude: '116.404', latitude: '39.920977' }
];

export default {
	data() {
		return {
			fullHeight: '',
			longitude: '',
			latitude: '',
			polygon: [],
			zoom: 16,
			markers: []
		};
	},
	watch: {
		vuex_permission() {
			this.getLocation();
		}
	},
	methods: {
		makertap(e) {
			const id = e.markerId;
			this.changeMarkerColor(wxMarkerData, id);
		},
		async initMap() {
			let markers = [];

			const points = wxMarkerData.map(item => {
				return bMapToQQMap(item.longitude, item.latitude);
			});

			const centerPoint = getCenter(points); //获取中心点坐标
			this.longitude = centerPoint[0];
			this.latitude = centerPoint[1];

			this.markers = [
				{
					longitude: this.longitude,
					latitude: this.latitude,
					iconPath: '../../../static/img/marker_location.png',
					width: 18,
					height: 18,
					label: { content: '大户A' + '\n' + '面积：500公顷', textAlign: 'center', anchorX: 30, anchorY: -60, padding: 3, borderRadius: 5, bgColor: '#ffffff' }
				}
			];

			this.zoom = getZoom(points); //设置缩放级别
			this.polygon = [
				{
					points,
					fillColor: '#db303035',
					strokeColor: '#fff',
					strokeWidth: 1,
					zIndex: 1
				}
			];
			this.getLocation();
		},
		getLocation() {
			if (this.vuex_permission) {
				uni.getLocation({
					type: 'gcj02 ',
					success: location => {
						if (location) {
							this.markers.push({ longitude: location.longitude, latitude: location.latitude, iconPath: '../../../static/img/marker_me.png', width: 18, height: 18 });
						}
					}
				});
			}
		}
	},
	onShow() {
		uni.setNavigationBarTitle({
			title: this.$t('nav.home')
		});
		const { windowWidth, windowHeight } = uni.getSystemInfoSync();
		this.fullHeight = 'height:' + windowHeight - 50 + 'px';
		this.initMap();
		this.$u.api.postUcUserGetuserbasicinfo();
	}
};
</script>

<style lang="scss" scoped>
.map_container {
	width: 100%;
	height: calc(100vh - 50px);
	.map {
		width: 100%;
		height: 100%;
	}
}
</style>
