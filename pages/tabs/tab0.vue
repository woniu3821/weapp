<template>
	<view class="wrap">
		<land-home v-if="vuex_type==='s1'"></land-home>
		<county-home v-if="vuex_type==='s2'"></county-home>
		<business-home v-if="vuex_type==='s3'"></business-home>
		<u-tabbar :list="vuex_tabbar" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
import 	landHome from '@/pages/land/home/main.vue'
import 	countyHome from '@/pages/county/home/main.vue'
import 	businessHome from '@/pages/business/home/main.vue'
export default{
	components:{
		landHome,
		countyHome,
		businessHome
	},
	data(){
		return {}
	}
}
	
</script>

<style>
</style>
