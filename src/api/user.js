import request from "../utils/request"
export const login = (data = {}) => {
  return request({
    url: "/admin/login",
    method: "POST",
    data
  })
}

// login({ username: "admin", password: "admin" })
