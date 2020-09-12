import {
		getMenu
	} from './menu.js';

	export default {
		methods: {
			async postUserGetuserinfo() {
				const [err, res] = await this.$u.api.postUserGetuserinfo();
				if (err) {
					this.fail(err);
					this.hide();
					this.showMask = false;
					return;
				}

				this.$u.vuex('vuex_user', res);
				let [userType, tabs] = getMenu(res.userType);

				let home = '/' + tabs[0].pagePath;
				this.$u.vuex('vuex_home', home);
				this.$u.vuex('vuex_type', userType);
				this.$u.vuex('vuex_tabbar', transPath(tabs));
				setTabs(tabs);
				this.$u.route({
					type: 'reLaunch',
					url: home
				});
			}
		}
	}


	function setTabs(tabs) {
		tabs.forEach((it, idx) => {
			uni.setTabBarItem({
				index: idx,
				...it
			});
		});
	}


	function transPath(data) {
		return data.map(it => {
			return { ...it,
				iconPath: '/' + it.iconPath,
				selectedIconPath: '/' + it.selectedIconPath,
				pagePath: '/' + it.pagePath
			};
		});
	}
