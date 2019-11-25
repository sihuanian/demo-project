import {RECEIVE_LIST} from "./mutation-type"
import listData from '../datas/list_data'

export default {
  getList({commit}){
    // 触发对应的mutation
    commit(RECEIVE_LIST, listData)
  }
}
