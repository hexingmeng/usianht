import { getToken, setToken, setUserInfo, getUserInfo } from '@/utils/auth'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || "",
    userInfo: getUserInfo() || ""
  },
  getters: {
    token (state) {
      return state.token
    },
    userInfo (state) {
      return state.userInfo
    }
  },
  mutations: {
    SET_TOKEN (state, token) {
      console.log(token);
      state.token = token
      setToken(token)
      // localStorage.setItem()
    },
    SET_USER_INFO (state, userInfo) {
      console.log(userInfo)
      state.userInfo = userInfo
      setUserInfo(userInfo)
    }
  },
  actions: {
    DIS_SET_TOKEN ({ commit }, token) {
      commit("SET_TOKEN", token)
    },
    DIS_SET_USER_INFO ({ commit }, userInfo) {
      commit("SET_USER_INFO", userInfo)
    }
  },
  modules: {
  }
})
