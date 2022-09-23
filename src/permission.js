// 引入路由对象
import router from "./router"
// 引入vuex
import store from "./store"

router.beforeEach(async (to, from, next) => {
  console.log("123")
  const token = store.getters.token
  if (token) {
    // 已登录的逻辑
    if (to.path === "/login") {
      next(from.path)
    } else {
      let userInfo = store.getters.userInfo
      userInfo = typeof userInfo === "object" ? JSON.stringify(userInfo) : userInfo

      if (userInfo === "{}" || userInfo === "") {
        const response = await store.dispatch("handleUserInfo")
        if (response) {
          next()
        } else {
          next("/login")
        }
      } else {
        next()
      }
    }
  } else {
    if (to.path === "/login") {
      next()
    } else {
      next("/login")
    }
  }
})
