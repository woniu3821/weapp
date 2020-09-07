<template>
	<view class="u-item-title wrap  u-flex u-row-between">
		<text>
			<slot></slot>
		</text>
		<view>
			<slot name="extra"></slot>
		</view>
	</view>
</template>

<script>
export default{
	name:'TitleBar'
}
</script>

<style lang="scss" scoped>

</style>
