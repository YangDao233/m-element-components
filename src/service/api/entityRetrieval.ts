/*
 * @Description: 实体检索配置
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-15 10:19:19
 * @LastEditTime: 2022-07-18 18:47:56
 */
import http from "@/service/http";
const prefix = "api";

/**
 * 实体表列表
 * @param params
 * @returns
 */
export const queryTableList = (params: any) =>
  http.get(`${prefix}/system/table/`, params);

/**
 * 原始表字段查询
 * @param params
 * @returns
 */
export const queryColumnInfo = (params: any) =>
  http.post(`${prefix}/system/column_config/get_column_info/`, params);

/**
 * 新增模板
 * @param params
 * @returns
 */
export const addColumnInfo = (params: any) =>
  http.post(`${prefix}/system/column_config/post_table_info/`, params);

/**
 * 添加分箱
 * @param params
 * @returns
 */
export const addDepart = (params: any) =>
  http.post(`${prefix}/system/split/post_split_info/`, params);
/**
 * 获取分箱列表
 * @param params
 * @returns
 */
export const getDepart = (params: any) =>
  http.get(`${prefix}/system/split/`, params);

/**
 * 字典查询接口
 * @param params
 * @returns
 */
export const getDictList = (params: any) =>
  http.get(`${prefix}/system/search_dict/`, params);

/**
 * 模板列表
 * @param params
 * @returns
 */
export const getTemplateList = (params: any) =>
  http.post(`${prefix}/system/column_config/table_def_get/`, params);

/**
 * 更新原始字段检索配置接口
 */
export const updateColumnInfo = (params: any) =>
  http.post(`${prefix}/system/column_config/modify_column_info/`, params);
