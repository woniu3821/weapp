// 用户类型、0诺丽用户、1省级用户、2市级用户、3县级用户、4大户用户、5网点用户、6厂家用户、7供应商用户


const allMenus = {
	s1: [ //大户
		{
			iconPath: "static/img/nt.png",
			selectedIconPath: "static/img/nt_active.png",
			text: '我的农田',
			pagePath: 'pages/land/home/main'
		},
		{
			iconPath: "static/img/tc.png",
			selectedIconPath: "static/img/tc_active.png",
			text: '营养套餐',
			pagePath: 'pages/land/meal/main'
		},
		{
			iconPath: "static/img/sfjl.png",
			selectedIconPath: "static/img/sfjl_active.png",
			text: '施肥记录',
			pagePath: 'pages/land/record/main'
		},
		{
			iconPath: "static/img/my.png",
			selectedIconPath: "static/img/my_active.png",
			text: '我的',
			pagePath: 'pages/county/my/main'
		}
	],
	s2: [ //站点
		{
			iconPath: "static/img/home.png",
			selectedIconPath: "static/img/home_active.png",
			text: '首页',
			pagePath: 'pages/county/home/main'
		},
		{
			iconPath: "static/img/wd.png",
			selectedIconPath: "static/img/wd_active.png",
			text: '大户/网点信息',
			pagePath: 'pages/county/outlets/main'
		},
		{
			iconPath: "static/img/gys.png",
			selectedIconPath: "static/img/gys_active.png",
			text: '供应商管理',
			pagePath: 'pages/county/supplier/main'
		},
		{
			iconPath: "static/img/my.png",
			selectedIconPath: "static/img/my_active.png",
			text: '我的',
			pagePath: 'pages/county/my/main'
		}
	],
	s3: [ //商户

		{
			iconPath: "static/img/cp.png",
			selectedIconPath: "static/img/cp_active.png",
			text: '产品管理',
			pagePath: 'pages/county/home/main'
		},
		{
			iconPath: "static/img/my.png",
			selectedIconPath: "static/img/my_active.png",
			text: '我的',
			pagePath: 'pages/county/my/main'
		}
	]
}

const roles={
	s1:[4],//大户
	s2:[-1,0,1,2,3],//县耕
	s3:[5,6,7]
}


export function getMenu(role) {
		let tag=''
		for(let key in roles){
			if(roles[key].indexOf(2)>-1){
				tag=key;
			}
		}
		return	allMenus[tag]
	}