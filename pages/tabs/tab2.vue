<template>
	<view class="wrap">
		<county-supplier v-if="vuex_type==='s2'"></county-supplier>
		<u-tabbar :list="vuex_tabbar" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
	// import landRecord from '@/pages/land/record/main.vue'
	import countySupplier from '@/pages/county/supplier/main.vue'
	// import myHome from '@/pages/my/main.vue'
	export default {
		components: {
			countySupplier,
			// myHome
		},
		data() {
			return {}
		}
	}
</script>

<style>
</style>
