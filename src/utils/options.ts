/*
 * @Description:
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-22 15:51:42
 * @LastEditTime: 2022-08-11 14:28:06
 */
export const userStatusList = [
  { value: 1, label: "启用" },
  { value: 0, label: "禁用" },
];
export const userStatus = {
  on: 1,
  off: 0,
};

export const systems = [
  { value: 1, label: "灵犀" },
  { value: 2, label: "白泽" },
  { value: 3, label: "数据检索" },
];

export const roleTypes = [
  { value: 1, label: "系统角色" },
  { value: 2, label: "机构角色" },
];
export const userTypes = [
  { value: 1, label: "超级管理员" },
  { value: 2, label: "系统管理员" },
  { value: 3, label: "机构管理员" },
  { value: 4, label: "普通用户" },
];

export const userType = {
  admin: 1,
  system: 2,
  org: 3,
  normal: 4,
};

export const operationTypeList = [
  { value: "", label: "全部" },
  { value: "下载", label: "下载" },
  { value: "退出", label: "退出" },
  { value: "登录", label: "登录" },
  { value: "查询", label: "查询" },
];

// 筛选类型
export const filterTypeLs = [
  { label: "分箱型", value: 1 },
  { label: "时间型", value: 2 },
  { label: "地址型", value: 3 },
  { label: "字典型", value: 4 },
  { label: "文本型", value: 5 },
];

// 统计类型
export const sumTypeLs = [
  { label: "不统计", value: 0 },
  { label: "统计类型", value: 1 },
  { label: "统计值", value: 2 },
  // { label: "最大", value: 1 },
  // { label: "最小", value: 2 },
];
