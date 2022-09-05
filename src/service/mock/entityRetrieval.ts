import http from "@/service/http";
const { get, post } = http;
export const getMockEntityPropertyList = (params?: any) => get("mockApi/entityPropertyList");
export const getMockTemplateInfo = (params?: any) => get("mockApi/templateInfo");
