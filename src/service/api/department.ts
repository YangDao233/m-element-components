/*
 * @Description: 部门管理api
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-06 11:22:31
 * @LastEditTime: 2022-07-07 14:51:20
 */
import http from "@/service/http";
import { pickBy } from "lodash";
const prefix = "api";

/**
 * 查询列表
 * @param params
 * @returns
 */
export const queryDepartmentList = (params?: any) => {
  return http.get(`${prefix}/system/department/`, params);
};

/**
 * 查询用户列表
 * @param params
 * @returns
 */
export const queryUserListByDepartment = (id: any, params?: any) =>
  http.get(`${prefix}/system/department/${id}/getuserinfo/`, params);

/**
 * 更新部门详情
 * @param params
 * @returns
 */
export const detailDepartment = (id: any) =>
  http.get(`${prefix}/system/department/${id}/`);

/**
 * 新建部门
 * @param params
 * @returns
 */
export const addDepartment = (params?: any) =>
  http.post(`${prefix}/system/department/`, params);

/**
 * 更新部门
 * @param params
 * @returns
 */
export const updateDepartment = (id: any, params?: any) =>
  http.patch(`${prefix}/system/department/${id}/`, params);

/**
 * 删除部门
 * @param params
 * @returns
 */
export const deleteDepartment = (id: any) =>
  http.delete(`${prefix}/system/department/${id}/`);
