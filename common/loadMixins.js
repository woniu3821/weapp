export default{
	data(){
		return {
			activityData: [],
			loadStatus: 'loadmore',
			init: true,
			flag: false,
			page: 1,
			pageSize: 10,
			beforePage: 1,
			keyword: ''
		}
	},
	methods: {
		reload() {
			this.getActivityData(true).then(() => {
				this.flag = false
			})
	
		},
		reachBottom() {
			// 当onShow的状态进行时，阻止加载更多再一次获取列表数据
			this.getActivityData()
		},
		async getActivityData(initList = false, nowPageSize) {
			if (initList) {
				this.page = 1
			}
			this.loadStatus = 'loading'
			const [err, res] = await this.$u.api[this.service](Object.assign({},this.params,{pageSize:nowPageSize || this.pageSize}))
			this.hide();
			if (err) {
				this.fail(err);
				this.loadStatus = 'nomore';
				return;
			}
			const total = res.total;
			initList ?
				(this.activityData = res.data) : (this.activityData = this.activityData.concat(res.data))
			this.page = this.page + 1
			// 如果本次有传nowPageSize，将page还原为跳转前的页码，下一次再获取更多接着之前的页码和页数进行获取
			if (nowPageSize) {
				this.page = this.beforePage
			}
			if (this.activityData.length < total) {
				this.loadStatus = 'loadmore'
			} else {
				this.loadStatus = 'nomore'
			}
		}
	},
	mounted() {
		if (this.init) {
			this.getActivityData(true).then(() => {
				this.init = false
			})
		}
	
	},
	created() {
		// 阻止onLoad触发该逻辑
		if (!this.init) {
			// 防止底部的加载更多再次获取列表数据
			this.flag = true
			this.getActivityData(true, this.activityData.length).then(() => {
				this.flag = false
			})
		}
	},
	beforeDestroy() {
		// 页面离开记录当前的页码
		this.beforePage = this.page
	}
}