
import http from "@/service/http";
const { get, post } = http;
export const getMockRoseList = () => get("mockApi/roseList");
export const getMockPermissionList = () => get("mockApi/permissionList");
export const getMockUserRoseList = () => get("mockApi/userRoseList");
export const getMockSelectEnableUserList = () => get("mockApi/selectEnableUserList");
