import Vue from 'vue'
import Drawdown from './index.vue'

const Draw = Vue.extend(Drawdown)

// {title, url}
function showDrawdown (drawdownList) {
  const node = new Draw({
    el: document.createElement('div'),
    propsData: {
      drawdownList
    }
  })
  const ul = document.querySelector('.drawdown')
  if (ul) {
    return
  }
  document.body.appendChild(node.$el)
}

export default showDrawdown
