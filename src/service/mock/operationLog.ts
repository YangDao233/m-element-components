
import http from "@/service/http";
const { get, post } = http;
export const getMockDepartmentList = () => get("mockApi/departmentList");
export const getMockInstitutionList = () => get("mockApi/institutionList");
export const getMockOperationLogList = () => get("mockApi/operationLogList");
