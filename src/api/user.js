import request from "@/libs/request";

export function login(data) {
  return request({
    url: "/api/user/login",
    method: "post",
    data
  });
}

export function getInfo() {
  return request({
    url: "/api/user/me",
    method: "get"
  });
}

export function updateInfo(data) {
  return request({
    url: "/api/user/profile",
    method: "put",
    data
  });
}

export function resetPwd(data) {
  return request({
    url: "/api/user/resetPwd",
    method: "post",
    data
  });
}

export function resetPassword(data) {
  return request({
    url: "/api/user/resetPasswordByMail",
    method: "post",
    data
  });
}

export function getAdministratorInfo() {
  return request({
    url: "/api/user/getAdministratorInfo",
    method: "get"
  });
}

export function getUserList(params) {
  return request({
    url: "/api/user/",
    method: "get",
    params
  });
}

export function addUser(data) {
  return request({
    url: "/api/user/addUser",
    method: "post",
    data
  });
}

export function editUser(data) {
  return request({
    url: "/api/user/updateUser",
    method: "put",
    data
  });
}

export function deleteUser(id) {
  return request({
    url: "/api/user/" + id,
    method: "delete"
  });
}

export function resetUser(id) {
  return request({
    url: "/api/user/resetPasswordByAdmin/" + id,
    method: "post"
  });
}

export function addInfo(data) {
  return request({
    url: "/api/user/profile",
    method: "put",
    data
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post"
  });
}
