import http from "@/service/http";
const { get, post } = http;
export const getMockUserList = () => get("mockApi/userList");
