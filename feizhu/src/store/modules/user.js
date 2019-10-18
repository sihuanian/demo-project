const state = {
  username: '',
  password: ''
}

const mutations = {
  login (state, user) {
    if (user.username === 'sihuanian' && user.password === '123456') {
      state.username = user.username
      state.avatar = user.avatar
    } else {
      alert('用户名或密码错误，请重新登录')
    }
  },
  esc (state) {
    state.username = ''
    state.avatar = ''
  }
}

const actions = {
  login ({ commit }, user) {
    commit('login', user)
  },
  regist ({ commit }, user) {
    commit('login', user)
  },
  esc ({ commit }) {
    commit('esc')
  }
}

const getters = {
  getUsername (state) {
    return state.username
  },
  getUserAvatar (state) {
    return state.avatar
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
