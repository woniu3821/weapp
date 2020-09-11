

<script>
import { getPermission } from '@/common/mapUtil.js';
export default {
	globalData: {
		username: '全局变量'
	},
	onLaunch() {
		getPermission().then(res => {
			this.$u.vuex('vuex_permission', res);
		});
	}
};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import 'common/public.scss';
</style>

<style lang="scss">

</style>
