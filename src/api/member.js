import request from "../untils/request";

// 获取会员列表与查询分页接口

const getMemberList = (page, size, data) => {
  return request({
    url: `/member/list/search/${page}/${size}`,
    method: "POST",
    data,
  });
};

// 删除会员接口
const deleteMemberList = (id) => {
  return request({
    url: `/member/${id}`,
    method: "DELETE",
  });
};

// 添加会员接口
const addMemberList = (data) => {
  return request({
    url: "/member",
    method: "POST",
    data,
  });
};

// 编辑会员接口
const editMemberList = (id, data) => {
  return request({
    url: `/member/${id}`,
    method: "PUT",
    data,
  });
};

// 查询单个会员接口
const findMemberList = (id) => {
  return request({
    url: `/member/${id}`,
    method: "GET",
  });
};

export default {
  getMemberList,
  deleteMemberList,
  addMemberList,
  editMemberList,
  findMemberList,
};
