/*
 * @Description:
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 18:28:33
 * @LastEditTime: 2022-07-26 16:02:40
 */
import http from "@/service/http";
const prefix = "api";
export const ssoLoginApi = (data?: any, config = {}) => {
  return http.post("/api/login/", data, config);
};
export const ssoInfo = (params?: any) => {
  return http.get("/river-data/oauth/ssoInfo", params);
};

export const getUserPermission = () => {
  return http.get(`${prefix}/system/auth/get_data_auth/`);
};

export const getAuthMenu = () => {
  return http.get("/api/system/auth/back_auth/");
};
