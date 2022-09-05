
import http from "@/service/http";
const { get, post } = http;
export const getMockMechanismList = () => get("mockApi/mechanismList");
