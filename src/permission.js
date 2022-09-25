// 引入路由对象
import router from "./router"

// 引入vuex
import store from "./store";

// 创建路由首位，实现页面鉴权
router.beforeEach(async (to, from, next) => {
    const token = store.getters.token
    if (token) {
        // 已登录的逻辑
        if (to.path === "/login") {
            next(from.path)
        } else {
            // 获取用户信息
            let userInfo = store.getters.userInfo
            userInfo = typeof userInfo === "object" ? JSON.stringify(userInfo) : userInfo
            if (userInfo === "{}" || userInfo === "") {
                const response = await store.dispatch("handleUserInfo")
                if(response){
                    next()
                }else{
                    next("/login")
                }
            }else{
                next()
            }
        }

    } else {
        if (to.path === "/login") {
            next()
        } else {
            next('/login')
        }
    }
})