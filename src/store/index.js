import { getToken, setToken, setUserInfo, getUserInfo, remiveTokenAndUserInfo } from '@/utils/auth'
import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout } from "../api/user"

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
      // console.log(userInfo)
      state.userInfo = userInfo
      setUserInfo(userInfo)
    }
  },
  actions: {

    async login ({ commit }, loginFrom) {
      try {
        const response = await login(loginFrom)
        commit("SET_TOKEN", response.token)
        return response.token
      } catch (e) {
        console.log(e.message);
      }
    },

    async handleUserInfo ({ commit }) {
      try {
        const userinfo = await userInfo()
        commit("SET_USER_INFO", userinfo)
        return userInfo
      } catch (e) {
        console.log(e.message);
      }
    },

    DIS_SET_TOKEN ({ commit }, token) {
      commit("SET_TOKEN", token)
    },
    DIS_SET_USER_INFO ({ commit }, userInfo) {
      commit("SET_USER_INFO", userInfo)
    },
    async handleLogout ({ commit }) {
      const response = await logout()
      commit("SET_TOKEN", "")
      commit("SET_USER_INFO", "")
      // remiveTokenAndUserInfo()
      // console.log(response);
      return response
    }
  },
  modules: {
  }
})
