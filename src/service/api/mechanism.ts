/*
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-05 18:48:09
 * @LastEditTime: 2022-07-09 15:44:06
 * @Description: 机构管理api
 */
import http from "@/service/http";

const prefix = "api";
// 机构管理

/**
 * 查询机构管理列表
 * @param params
 * @returns
 */
// http.get(`${prefix}/system/oragization/`, params);
export const queryMechanism = (params?: any) =>
    http.get(`${prefix}/system/oragization/search_fields/`, params);

/**
 * 新增机构管理列表
 * @param params
 * @returns
 */
export const addMechanism = (data?: any) =>
    http.post(`${prefix}/system/oragization/create_user_org/`, data);

/**
 * 修改机构管理列表
 * @param params
 * @returns
 */
export const updateMechanism = (id: any, data?: any) =>
    http.patch(`${prefix}/system/oragization/${id}/update_user_org/`, data);

/**
 * 启用禁用
 * @param params
 * @returns
 */
export const updateMechanismStatus = (id: any, data?: any) =>
    http.patch(`${prefix}/system/oragization/${id}/`, data);

/**
 * 删除机构管理列表
 * @param params
 * @returns
 */
export const deleteMechanism = (id: any) => {
    http.delete(`${prefix}/system/oragization/${id.data.id}/`);
}
