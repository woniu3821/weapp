/**
 * 判断点是否多边形内
 * @param {Point} point 点对象 例如: {longitude:114,latitude:40}
 * @param {Object} polygon 多边形点的对象数组 例如: [{longitude:114,latitude:40},{longitude:114.2,latitude:40.1}]
 * @returns {Boolean} 点在多边形内返回true,否则返回false
 */


const EARTH_RADIUS = 6378137.0

export function isPointInPolygon(point, polygon) {
	if (!point || point.length < 2) {
		console.error('坐标点格式错误')
		return false;
	}
	if (!polygon || polygon.length < 4) {
		console.error('多边形格式错误')
		return false;
	}

	var pts = JSON.parse(JSON.stringify(polygon));
	//下述代码来源：http://paulbourke.net/geometry/insidepoly/，进行了部分修改
	//基本思想是利用射线法，计算射线与多边形各边的交点，如果是偶数，则点在多边形外，否则
	//在多边形内。还会考虑一些特殊情况，如点在多边形顶点上，点在多边形边上等特殊情况。

	var boundOrVertex = true; //如果点位于多边形的顶点或边上，也算做点在多边形内，直接返回true
	var intersectCount = 0; //cross points count of x
	var precision = 2e-10; //浮点类型计算时候与0比较时候的容差
	var p1, p2; //neighbour bound vertices
	var p = point; //测试点
	var N = pts.length;

	p1 = pts[0]; //left vertex
	for (var i = 1; i <= N; ++i) { //check all rays
		if (p.latitude == p1.latitude && p.longitude == p1.longitude) {
			return boundOrVertex; //p is an vertex
		}

		p2 = pts[i % N]; //right vertex
		if (p.latitude < Math.min(p1.latitude, p2.latitude) || p.latitude > Math.max(p1.latitude, p2.latitude)) { //ray is outside of our interests
			p1 = p2;
			continue; //next ray left point
		}

		if (p.latitude > Math.min(p1.latitude, p2.latitude) && p.latitude < Math.max(p1.latitude, p2.latitude)) { //ray is crossing over by the algorithm (common part of)
			if (p.longitude <= Math.max(p1.longitude, p2.longitude)) { //x is before of ray
				if (p1.latitude == p2.latitude && p.longitude >= Math.min(p1.longitude, p2.longitude)) { //overlies on a horizontal ray
					return boundOrVertex;
				}

				if (p1.longitude == p2.longitude) { //ray is vertical
					if (p1.longitude == p.longitude) { //overlies on a vertical ray
						return boundOrVertex;
					} else { //before ray
						++intersectCount;
					}
				} else { //cross point on the left side
					var xinters = (p.latitude - p1.latitude) * (p2.longitude - p1.longitude) / (p2.latitude - p1.latitude) + p1.longitude; //cross point of longitude
					if (Math.abs(p.longitude - xinters) < precision) { //overlies on a ray
						return boundOrVertex;
					}

					if (p.longitude < xinters) { //before ray
						++intersectCount;
					}
				}
			}
		} else { //special case when ray is crossing through the vertex
			if (p.latitude == p2.latitude && p.longitude <= p2.longitude) { //p crossing over p2
				var p3 = pts[(i + 1) % N]; //next vertex
				if (p.latitude >= Math.min(p1.latitude, p3.latitude) && p.latitude <= Math.max(p1.latitude, p3.latitude)) { //p.latitude lies between p1.latitude & p3.latitude
					++intersectCount;
				} else {
					intersectCount += 2;
				}
			}
		}
		p1 = p2; //next ray left point
	}

	if (intersectCount % 2 == 0) { //偶数在多边形外
		return false;
	} else { //奇数在多边形内
		return true;
	}
}

/**
 * 将度转化为弧度
 * @param {degree} Number 度
 * @returns {Number} 弧度
 */
let degreeToRad = function(degree) {
	return Math.PI * degree / 180;
}

/**
 * 将弧度转化为度
 * @param {radian} Number 弧度
 * @returns {Number} 度
 */
let radToDegree = function(rad) {
	return (180 * rad) / Math.PI;
}

/**
 * 将v值限定在a,b之间，纬度使用
 */
function _getRange(v, a, b) {
	if (a != null) {
		v = Math.max(v, a);
	}
	if (b != null) {
		v = Math.min(v, b);
	}
	return v;
}

/**
 * 将v值限定在a,b之间，经度使用
 */
function _getLoop(v, a, b) {
	while (v > b) {
		v -= b - a
	}
	while (v < a) {
		v += b - a
	}
	return v;
}

/**
 * 计算两点之间的距离,两点坐标必须为经纬度
 * @param {point1} Point 点对象
 * @param {point2} Point 点对象
 * @returns {Number} 两点之间距离，单位为米
 */
export function getDistance(point1, point2) {
	//判断类型

	point1.longitude = _getLoop(point1.longitude, -180, 180);
	point1.latitude = _getRange(point1.latitude, -74, 74);
	point2.longitude = _getLoop(point2.longitude, -180, 180);
	point2.latitude = _getRange(point2.latitude, -74, 74);

	var x1, x2, y1, y2;
	x1 = degreeToRad(point1.longitude);
	y1 = degreeToRad(point1.latitude);
	x2 = degreeToRad(point2.longitude);
	y2 = degreeToRad(point2.latitude);

	return EARTH_RADIUS * Math.acos((Math.sin(y1) * Math.sin(y2) + Math.cos(y1) * Math.cos(y2) * Math.cos(x2 - x1)));
}

function getMinAndMaxPiont(pointArray) {
	var sortedLongitudeArray = pointArray.map(item => item.longitude).sort(); //首先对经度进行排序，红色部分是array中经度的名称
	var sortedLatitudeArray = pointArray.map(item => item.latitude).sort(); //对纬度进行排序，红色部分是array中纬度的名称

	return {
		min: {
			longitude: sortedLongitudeArray[0],
			latitude: sortedLatitudeArray[0]
		},
		max: {
			longitude: sortedLongitudeArray[sortedLongitudeArray.length - 1],
			latitude: sortedLatitudeArray[sortedLatitudeArray.length - 1]
		}
	}
}

export function getCenter(pointArray) {
	//console.log(JSON.stringify(pointArray));
	const point = getMinAndMaxPiont(pointArray)

	const centerLongitude = ((parseFloat(point.min.longitude) + parseFloat(point.max.longitude)) / 2).toFixed(4);
	const centerLatitude = ((parseFloat(point.min.latitude) + parseFloat(point.max.latitude)) / 2).toFixed(4)

	//如果经纬度在array中不是数字类型，需要转化为数字类型进行计算，如果是可以去掉parseFloat处理
	//console.log(centerLongitude+"kkk"+centerLatitude);
	return [centerLongitude, centerLatitude];
}




export function getZoom(pointArray) {
	let zoom = ['10', '20', '50', '50', '100', '200', '500', '1000', '20000', '50000', '100000', '200000', '500000',
		'500000', '1000000', '2000000', '5000000', '10000000'
	] // 级别18到3。

	if (pointArray.length <= 1) {
		return 17;
	}


	const point = getMinAndMaxPiont(pointArray)

	const pointA = {
		longitude: parseFloat(point.min.longitude).toFixed(4),
		latitude: parseFloat(point.min.latitude).toFixed(4)
	}

	const pointB = {
		longitude: parseFloat(point.max.longitude).toFixed(4),
		latitude: parseFloat(point.max.latitude).toFixed(4)
	}

	let distance = getDistance(pointA, pointB).toFixed(1)
	// 获取两点距离,保留小数点后两位
	for (let i = 0, zoomLen = zoom.length; i < zoomLen; i++) {
		if (zoom[i] - distance > 0) {
			return 19 - i + 3 // 之所以会多3，是因为地图范围常常是比例尺距离的10倍以上。所以级别会增加3。
		}
	};
}




export function getPermission() {
	//获取位置授权
	return new Promise((resolve) => {
		uni.getSetting({
			success: function(res) {
				var statu = res.authSetting;
				if (!statu['scope.userLocation']) {
					uni.authorize({
						scope: 'scope.userLocation',
						success() {

							resolve(true)
						},
						fail() {
							uni.showModal({
								content: '检测到您没打开定位权限，是否去设置打开？',
								confirmText: "确认",
								cancelText: "取消",
								success: function(res) {
									//点击“确认”时打开设置页面
									if (res.confirm) {
										uni.openSetting({
											success: (res) => {
												var statu = res.authSetting;
												if (statu['scope.userLocation']) {


													resolve(true)
												}
											}
										})
									} else {
										resolve(false)
									}
								}
							});

						}

					})
				}
			}
		})
	})

}
