<template>
	<view class="wrap">
		<view class="map_container" :style="fullHeight"><map :scale="zoom" class="map"  id="map" :longitude="longitude" :latitude="latitude" :polygons="polygon" ></map></view>
		<u-tabbar :list="vuex_tabbar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
import { bMapToQQMap } from '@/common/tools.js';
import {getCenter,getZoom}from '@/common/mapUtil.js'
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
			zoom:16
		};
	},
	methods: {
		makertap(e) {
			const id = e.markerId;
			this.changeMarkerColor(wxMarkerData, id);
		},
		initMap() {
			const points = wxMarkerData.map(item => {
				return bMapToQQMap(item.longitude, item.latitude);
			});
			
			const centerPoint=getCenter(points)//获取中心点坐标
			this.longitude = centerPoint[0];
			this.latitude = centerPoint[1];
			
			this.zoom=getZoom(points)//设置缩放级别
			
			this.polygon = [{ points, strokeWidth: 2, fillColor: '#ffff0033', strokeColor: '#fff', strokeWidth: 2, zIndex: 1 }];
		}
	},
	onShow() {
		uni.setNavigationBarTitle({
			title: this.$t('nav.home')
		});
		const { windowWidth, windowHeight } = uni.getSystemInfoSync();
		this.fullHeight = 'height:' + windowHeight + 'px';
		this.initMap();
		this.$u.api.serviceHome();
	}
};
</script>

<style lang="scss" scoped>
.map_container {
	width: 100%;
}
.map {
	width: 100%;
	height: 100%;
}
</style>
