<template>
	<view class="wrap">
		<land-meal v-if="vuex_type==='s1'"></land-meal>
		<county-outlets v-if="vuex_type==='s2'"></county-outlets>
		<my-home v-if="vuex_type==='s3'"></my-home>
		<u-tabbar :list="vuex_tabbar" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
	import landMeal from '@/pages/land/meal/main.vue'
	import countyOutlets from '@/pages/county/outlets/main.vue'
	import myHome from '@/pages/my/main.vue'
	export default {
		components: {
			landMeal,
			countyOutlets,
			myHome
		},
		data() {
			return {}
		}
	}
</script>

<style>
</style>
