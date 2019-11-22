/*
使用mockjs来mock数据/接口的模块
 */
import Mock from 'mockjs'
import ZX from './feizhuzhuanxian.json' // webpack在打包时自动解析为js对应的类型(对象)

Mock.mock('/zhuanxian', {data: ZX.result})
Mock.mock('/cityList', {data: require('./cityList')})
Mock.mock('/foreign', {data: require('./foreign')})
Mock.mock('/foreignCity?id=0', {data: require('./foreignCity0')})
Mock.mock('/foreignCity?id=1', {data: require('./foreignCity1')})
Mock.mock('/foreignCity?id=2', {data: require('./foreignCity2')})
Mock.mock('/foreignCity?id=3', {data: require('./foreignCity3')})
Mock.mock('/foreignCity?id=4', {data: require('./foreignCity4')})
Mock.mock('/foreignCity?id=5', {data: require('./foreignCity5')})
Mock.mock('/foreignCity?id=6', {data: require('./foreignCity6')})
Mock.mock('/territory', {data: require('./territory')})
Mock.mock('/territoryCity?id=0', {data: require('./territoryCity0')})
Mock.mock('/territoryCity?id=1', {data: require('./territoryCity1')})
Mock.mock('/territoryCity?id=2', {data: require('./territoryCity2')})
Mock.mock('/territoryCity?id=3', {data: require('./territoryCity3')})
Mock.mock('/territoryCity?id=4', {data: require('./territoryCity4')})
Mock.mock('/territoryCity?id=5', {data: require('./territoryCity5')})
Mock.mock('/territoryCity?id=6', {data: require('./territoryCity6')})
Mock.mock('/territoryCity?id=7', {data: require('./territoryCity7')})
Mock.mock('/packageTour?id=0', {data: require('./packageTour0')})
Mock.mock('/packageTour?id=1', {data: require('./packageTour1')})
Mock.mock('/packageTour?id=2', {data: require('./packageTour2')})
Mock.mock('/packageTour?id=4', {data: require('./packageTour4')})
Mock.mock('/packageTour?id=5', {data: require('./packageTour5')})
Mock.mock('/packageTour?id=6', {data: require('./packageTour6')})
Mock.mock('/packageTour?id=7', {data: require('./packageTour7')})
Mock.mock('/aroundCityList', {data: require('./aroundCityList')})
Mock.mock('/aroundCitiesList', {data: require('./aroundCitiesList')})
Mock.mock('/aroundCities?id=0', {data: require('./aroundCities0')})
Mock.mock('/aroundCities?id=1', {data: require('./aroundCities1')})
Mock.mock('/aroundCities?id=2', {data: require('./aroundCities2')})
Mock.mock('/aroundCities?id=3', {data: require('./aroundCities3')})
Mock.mock('/aroundCities?id=4', {data: require('./aroundCities4')})
Mock.mock('/aroundCities?id=5', {data: require('./aroundCities5')})
Mock.mock('/aroundCities?id=6', {data: require('./aroundCities6')})
Mock.mock('/aroundCities?id=7', {data: require('./aroundCities7')})
Mock.mock('/aroundCities?id=8', {data: require('./aroundCities8')})
Mock.mock('/aroundCities?id=9', {data: require('./aroundCities9')})
Mock.mock('/aroundCities?id=10', {data: require('./aroundCities10')})
Mock.mock('/aroundCities?id=11', {data: require('./aroundCities11')})
Mock.mock('/aroundCities?id=12', {data: require('./aroundCities12')})
Mock.mock('/aroundCities?id=13', {data: require('./aroundCities13')})
Mock.mock('/aroundCities?id=14', {data: require('./aroundCities14')})
Mock.mock('/hotel?id=0', {data: require('./hotelNation0')})
Mock.mock('/hotel?id=1', {data: require('./hotelNation1')})
Mock.mock('/hotel?id=2', {data: require('./hotelNation2')})
Mock.mock('/hotel?id=3', {data: require('./hotelNation3')})
Mock.mock('/hotel?id=4', {data: require('./hotelNation4')})
Mock.mock('/hotel?id=5', {data: require('./hotelNation5')})
Mock.mock('/hotel?id=6', {data: require('./hotelNation6')})
Mock.mock('/hotel?id=7', {data: require('./hotelNation7')})
Mock.mock('/hotel?id=8', {data: require('./hotelNation8')})
Mock.mock('/hotelFilter?id=0', {data: require('./hotelFilter0')})
Mock.mock('/hotelForeign?id=0', {data: require('./hotelForeign0')})
Mock.mock('/hotelForeign?id=1', {data: require('./hotelForeign1')})
Mock.mock('/hotelForeign?id=2', {data: require('./hotelForeign2')})
Mock.mock('/hotelForeign?id=3', {data: require('./hotelForeign3')})
Mock.mock('/hotelForeign?id=4', {data: require('./hotelForeign4')})
Mock.mock('/hotelForeign?id=5', {data: require('./hotelForeign5')})
Mock.mock('/hotelForeign?id=6', {data: require('./hotelForeign6')})
Mock.mock('/hotelForeign?id=7', {data: require('./hotelForeign7')})
Mock.mock('/hotelForeign?id=8', {data: require('./hotelForeign8')})
Mock.mock('/recommend', {data: require('./recommend')})
Mock.mock('/goodsDetail', {data: require('./goodsDetail.json')})

/*
// 暴露接口: /goods
Mock.mock('/goods', {code: 0, data: data.goods})
*/
