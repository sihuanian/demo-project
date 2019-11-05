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

Mock.mock('/zhuanxian', {data: ZX.result})
Mock.mock('/cityList', {data: cityList})
Mock.mock('/forign', {data: forign})
Mock.mock('/foreignCity?id=0', {data: forignCity0})
Mock.mock('/foreignCity?id=1', {data: forignCity1})
Mock.mock('/foreignCity?id=2', {data: forignCity2})
Mock.mock('/foreignCity?id=3', {data: forignCity3})
Mock.mock('/foreignCity?id=4', {data: forignCity4})
Mock.mock('/foreignCity?id=5', {data: forignCity5})
Mock.mock('/foreignCity?id=6', {data: forignCity6})

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
