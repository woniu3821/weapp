<template>
	<view class="wrap">
		<my-home></my-home>
		<u-tabbar :list="vuex_tabbar" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
	import myHome from '@/pages/my/main.vue'
	export default {
		components: {
			myHome
		},
		data() {
			return {}
		}
	}
</script>

<style>
</style>
