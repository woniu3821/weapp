var coordtransform = require('coordtransform');



export const awaitWrap = (promise) =>
	promise
	.then((res) => {
		if (res.statusCode === 200 && res.data.code === 200) {
			return [null, res.data.result];
		}
		
		const msg = res.data.message;
		return [msg ? msg : '错误', null];
	})
	.catch((err) => {
		const msg = typeof err === 'object' ? err.errMsg : err;
		return [msg, null];
	});


/**
 * 坐标转换，百度地图坐标转换成腾讯地图坐标
 * lng 腾讯经度（pointy）
 * lat 腾讯纬度（pointx）
 * 经度>纬度
 */
export function bMapToQQMap(lng, lat) {
	const [longitude, latitude] = coordtransform.bd09togcj02(lng, lat)

	return {
		longitude,
		latitude
	};

}


export function QQMapTobMap(lng, lat) {
	const [longitude, latitude] = coordtransform.gcj02tobd09(lng, lat)
	return {
		longitude,
		latitude
	};

}



/**
 * 坐标转换，腾讯地图转换成百度地图坐标
 * lng 腾讯经度（pointy）
 * lat 腾讯纬度（pointx）
 * 经度>纬度
 */

export function qqMapToBMap(lng, lat) {

	if (lng == null || lng == '' || lat == null || lat == '')
		return [lng, lat];

	var x_pi = 3.14159265358979324;
	var x = parseFloat(lng);
	var y = parseFloat(lat);
	var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
	var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
	var lng = (z * Math.cos(theta) + 0.0065).toFixed(5);
	var lat = (z * Math.sin(theta) + 0.006).toFixed(5);
	return {
		longitude: lng,
		latitude: lat
	};

}
