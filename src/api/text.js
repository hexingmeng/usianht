import request from '../utils/request'

// const getNewList = () => {
//   return request({
//     url: '/',
//     method: 'GET'
//   })
// }

// const getLiveList = () => {

// }

const getMemberList = (page = 1, size = 10, data) => {
  return request({
    url: `/member/list/search/${page}/${size}`,
    method: 'POST',
    data
  })
}

const getSupplierList = (page = 1, size = 10, data) => {
  return request({
    url: `supplier/list/search/${page}/${size}`,
    method: 'POST',
    data
  })
}

export default {
  getMemberList,
  getSupplierList
}
