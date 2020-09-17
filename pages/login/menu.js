// 用户类型、0诺丽用户、1省级用户、2市级用户、3县级用户、4大户用户、5网点用户、6厂家用户、7供应商用户


const allMenus = {
	s1: [ //大户
		{
			iconPath: "static/img/nt.png",
			selectedIconPath: "static/img/nt_active.png",
			text: '我的农田',
			pagePath: 'pages/tabs/tab0'
		},
		{
			iconPath: "static/img/tc.png",
			selectedIconPath: "static/img/tc_active.png",
			text: '营养套餐',
			pagePath: 'pages/tabs/tab1'
		},
		// {
		// 	iconPath: "static/img/sfjl.png",
		// 	selectedIconPath: "static/img/sfjl_active.png",
		// 	text: '施肥记录',
		// 	pagePath: 'pages/tabs/tab2'
		// },
		{
			iconPath: "static/img/my.png",
			selectedIconPath: "static/img/my_active.png",
			text: '我的',
			pagePath: 'pages/tabs/tab3'
		}
	],
	s2: [ //站点
		{
			iconPath: "static/img/home.png",
			selectedIconPath: "static/img/home_active.png",
			text: '首页',
			pagePath: 'pages/tabs/tab0'
		},
		{
			iconPath: "static/img/wd.png",
			selectedIconPath: "static/img/wd_active.png",
			text: '大户/网点信息',
			pagePath: 'pages/tabs/tab1'
		},
		{
			iconPath: "static/img/gys.png",
			selectedIconPath: "static/img/gys_active.png",
			text: '供应商管理',
			pagePath: 'pages/tabs/tab2'
		},
		{
			iconPath: "static/img/my.png",
			selectedIconPath: "static/img/my_active.png",
			text: '我的',
			pagePath: 'pages/tabs/tab3'
		}
	],
	s3: [ //商户
		{
			iconPath: "static/img/cp.png",
			selectedIconPath: "static/img/cp_active.png",
			text: '产品管理',
			pagePath: 'pages/tabs/tab0'
		},
		{
			iconPath: "static/img/my.png",
			selectedIconPath: "static/img/my_active.png",
			text: '我的',
			pagePath: 'pages/tabs/tab3'
		}
	]
}

const roles={
	s1:[4,5],//大户
	s2:[0,1,2,3],//县耕
	s3:[6,7]//商家
}


export function getMenu(role) {
		let tag=''
		for(let key in roles){
			if(roles[key].indexOf(6)>-1){
				tag=key;
			}
		}
		return	[tag,allMenus[tag]]
	}