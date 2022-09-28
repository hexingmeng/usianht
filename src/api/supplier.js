// 引入axios实例对象
import request from "@/utils/rqeuire";
// 获取供应商列表接口
const getSupplierList = (page, size, data) => {
  return request({
    url: `/supplier/list/search/${page}/${size}`,
    method: 'POST',
    data
  })
}

export default {
  getSupplierList
}