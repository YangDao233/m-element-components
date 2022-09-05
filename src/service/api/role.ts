/*
 * @Description: 角色管理api
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-06 11:21:36
 * @LastEditTime: 2022-07-09 12:35:58
 */
import http from "@/service/http";
const prefix = "api";
/**
 * 查询角色管理列表
 * @param params
 * @returns
 */
export const queryRoleList = (params?: any) =>
  http.get(`${prefix}/system/role/`, params);

/**
 * 添加角色
 * @param params
 * @returns
 */
export const addRole = (params?: any) =>
  http.post(`${prefix}/system/role/`, params);

/**
 * 修改角色 & 启用禁用
 * @param params
 * @returns
 */
export const updateRole = (id: any, params?: any) =>
  http.patch(`${prefix}/system/role/${id}/`, params);

/**
 * 根据角色id查询有哪些用户
 * @param params
 * @returns
 */
export const roleIdByUser = (id: any, params?: any) =>
  http.get(`${prefix}/system/role/${id}/roleId_get_users/`, params);

/**
 * 根据角色id查询有哪些权限
 * @param params
 * @returns
 */
export const roleIdByMenu = (id: any, params?: any) =>
  http.get(`${prefix}/system/role/${id}/roleId_get_menu/`, params);

/**
 * 角色添加用户
 * @param params
 * @returns
 */
export const addUserByRole = (id: any, params?: any) =>
  http.post(`${prefix}/system/role/${id}/roleId_post_users/`, params);
/**
 * 获取菜单权限
 * @param params
 * @returns
 */
export const queryAuthPermissionList = (params?: any) =>
  http.get(`${prefix}/system/auth/`, params);
/**
 * 删除角色
 * @param params
 * @returns
 */
export const deleteRole = (id: any) =>
    http.delete(`${prefix}/system/role/${id.id}/`);

