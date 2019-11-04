/*
使用mockjs来mock数据/接口的模块
 */
import Mock from 'mockjs'
import ZX from './feizhuzhuanxian.json' // webpack在打包时自动解析为js对应的类型(对象)
import cityList from './cityList.json'
Mock.mock('/zhuanxian', {data: ZX.result})
Mock.mock('/cityList', {data: cityList})

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
