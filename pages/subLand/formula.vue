<template>
	<view class="wrap">
		<u-table padding="5">
			<u-tr>
				<u-th>配方</u-th>
				<u-th>总含量</u-th>
				<u-th>氮含量</u-th>
				<u-th>磷含量</u-th>
				<u-th>钾含量</u-th>
			</u-tr>
			<u-tr v-for="(item, index) in formulas" :key="index">
				<u-td>{{ item.value }}</u-td>
				<u-td>{{ item.total }}</u-td>
				<u-td>{{ item.nitrogen }}</u-td>
				<u-td>{{ item.phosphorus }}</u-td>
				<u-td>{{ item.potassium }}</u-td>
			</u-tr>
		</u-table>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formulas: []
		};
	},
	onLoad(options) {
		this.formulas = JSON.parse(options.data);
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 30rpx;
}
</style>
