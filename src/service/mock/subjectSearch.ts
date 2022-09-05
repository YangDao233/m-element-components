import http from "@/service/http";
const { get, post } = http;
export const getMockSubjectSearchList = () => get("mockApi/subjectSearchList");
export const getMockEntityList = (params?: any) => get("mockApi/entityList");
export const getMockTemplateList = (params?: any) => get("mockApi/templateList");
