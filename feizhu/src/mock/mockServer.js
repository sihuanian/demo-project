/*
使用mockjs来mock数据/接口的模块
 */
import Mock from 'mockjs'
import ZX from './feizhuzhuanxian.json' // webpack在打包时自动解析为js对应的类型(对象)
import cityList from './cityList.json'
import forign from './foreign.json'
import forignCity0 from './foreignCity0.json'
import forignCity1 from './foreignCity1.json'
import forignCity2 from './foreignCity2.json'
import forignCity3 from './foreignCity3.json'
import forignCity4 from './foreignCity4.json'
import forignCity5 from './foreignCity5.json'
import forignCity6 from './foreignCity6.json'
import territory from './territory.json'
import territoryCity0 from './territoryCity0.json'
import territoryCity1 from './territoryCity1.json'
import territoryCity2 from './territoryCity2.json'
import territoryCity3 from './territoryCity3.json'
import territoryCity4 from './territoryCity4.json'
import territoryCity5 from './territoryCity5.json'
import territoryCity6 from './territoryCity6.json'
import territoryCity7 from './territoryCity7.json'
import packageTour0 from './packageTour0.json'

Mock.mock('/zhuanxian', {data: ZX.result})
Mock.mock('/cityList', {data: cityList})
Mock.mock('/foreign', {data: forign})
Mock.mock('/foreignCity?id=0', {data: forignCity0})
Mock.mock('/foreignCity?id=1', {data: forignCity1})
Mock.mock('/foreignCity?id=2', {data: forignCity2})
Mock.mock('/foreignCity?id=3', {data: forignCity3})
Mock.mock('/foreignCity?id=4', {data: forignCity4})
Mock.mock('/foreignCity?id=5', {data: forignCity5})
Mock.mock('/foreignCity?id=6', {data: forignCity6})
Mock.mock('/territory', {data: territory})
Mock.mock('/territoryCity?id=0', {data: territoryCity0})
Mock.mock('/territoryCity?id=1', {data: territoryCity1})
Mock.mock('/territoryCity?id=2', {data: territoryCity2})
Mock.mock('/territoryCity?id=3', {data: territoryCity3})
Mock.mock('/territoryCity?id=4', {data: territoryCity4})
Mock.mock('/territoryCity?id=5', {data: territoryCity5})
Mock.mock('/territoryCity?id=6', {data: territoryCity6})
Mock.mock('/territoryCity?id=7', {data: territoryCity7})
Mock.mock('/packageTour?id=0', {data: packageTour0})

/*
// 暴露接口: /goods
Mock.mock('/goods', {code: 0, data: data.goods})

// 暴露接口: /ratings
Mock.mock('/ratings', {code: 0, data: data.ratings})

// 暴露接口: /info
Mock.mock('/info', {code: 0, data: data.info})
*/

// console.log('执行了mockServer')
// console.log(ZX)
