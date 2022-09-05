/*
 * @Description: 部门管理api
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-06 11:22:31
 * @LastEditTime: 2022-07-25 15:59:02
 */
import http from "@/service/http";
import dayjs from "dayjs";
const prefix = "api";

/**
 * 查询列表
 * @param params
 * @returns
 */
export const queryLogList = (params?: any) => {
  params.option_time = params.option_time
    ? params.option_time.map((item: any) => {
        const strTime = dayjs(item).format("YYYY-MM-DD HH:mm:ss");
        return strTime;
      })
    : [];
  return http.post(`${prefix}/system/log/get_log_info/`, params);
};

export const getOperationType = (params?: any) => {
  return http.get(`${prefix}/system/log/get_log_type/`, params);
};

export const logoutLog = (params?: any) => {
  return http.get(`${prefix}/system/log/logout_save_log/`, params);
};

export const logDownload = (params: any, config?: any) => {
  return http.post(`${prefix}/system/log/download_file/`, params, config);
};
