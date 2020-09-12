<template>
	<view class="wrap">
		<land-record v-if="vuex_type==='s1'"></land-record>
		<county-supplier v-if="vuex_type==='s2'"></county-supplier>
		<u-tabbar :list="vuex_tabbar" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
	import landRecord from '@/pages/land/record/main.vue'
	import countySupplier from '@/pages/county/supplier/main.vue'

	export default {
		components: {
			landRecord,
			countySupplier
		},
		data() {
			return {}
		}
	}
</script>

<style>
</style>
