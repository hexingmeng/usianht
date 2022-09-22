import request from "../utils/request"
export const login = (data = {}) => {
  return request({
    url: '/admin/login',
    method: "POST",
    data
  })
}

export const getUserInfo = () => {
  return request({
    url: "/admin/getUserInfo",
    method: "GET"
  })
}

export const logout = () => {
  return request({
    url: "/admin/logout",
    method: "POST"
  })
}

// login({ username: "admin", password: "admin" })
