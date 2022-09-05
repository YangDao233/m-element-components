import http from "./http";
const { get, post } = http;
export const getMockTest = () => get("/getUser");
export const getTest = () => get("/getTest");