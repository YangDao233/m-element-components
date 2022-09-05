/*
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-05 18:48:09
 * @LastEditTime: 2022-08-03 18:21:13
 * @Description: 用户管理api
 */
import http from "@/service/http";
import { pickBy } from "lodash";
import qs from "qs";
const prefix = "api";

/**
 * 查询用户管理列表
 * @param params
 * @returns
 */
export const queryUserList = (_params = {}) => {
  const params = pickBy(_params, (item) => item !== "" && item !== null);
  const url = `${prefix}/system/user/user/?${qs.stringify(params, {
    indices: false,
  })}`;
  return http.get(url, {});
};

/**
 * 修改密码
 * @param params
 * @returns
 */
export const change_password = (id: any, params?: any) =>
  http.put(`${prefix}/system/user/${id}/change_password/`, params);

/**
 * 重置密码
 * @param params
 * @returns
 */
export const resetPassword = (id: any, params?: any) =>
  http.put(`${prefix}/system/user/${id}/reset_to_default_password/`, params);

/**
 * 添加用户
 * @param params
 * @returns
 */
export const addUser = (params?: any) =>
  http.post(`${prefix}/system/user/`, params);

/**
 * 修改用户 & 启用禁用
 * @param params
 * @returns
 */
export const updateUser = (id: any, params?: any) =>
  http.patch(`${prefix}/system/user/${id}/`, params);
/**
 * 删除
 * @param params
 * @returns
 */
export const deleteUser = (id: any) =>
    http.delete(`${prefix}/system/user/${id}/`);
