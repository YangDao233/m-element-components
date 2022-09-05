/*
 * @Description:
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 18:28:33
 * @LastEditTime: 2022-08-05 17:11:25
 */
import { ssoInfo } from "@/service/api/common/common";

const URI = import.meta.env.DEV ? import.meta.env.VITE_CALLBACK_URL_DEV : window?.config.CALLBACK_URL;

export const SSO_URL = `${window?.config?.LOGIN_URL}sso/oauth/authorize?response_type=code&client_id=${window?.config?.CLIENT_ID}&scope=cwos_login&redirect_uri=${URI}`;
export const authMenuApi = `/api/system/auth/back_auth/`; // 获取菜单api

export const numberFormatter = (num: number) => {
  let str = num.toString();
  const re = /(?=(?!(\b))(\d{3})+$)/g;
  str = str.replace(re, ",");
  return str;
};

// 添加千分位分隔符
export const formatNumber = (number: number) => {
  const num = +number;
  let result;
  if (!num) {
    result = "0";
  } else {
    const str = `${num}`;
    const rev = str.split("").reverse().join("");
    const added = rev.replace(/\d{3}(?!$)/g, (s) => `${s},`);
    result = added.split("").reverse().join("");
  }
  return result;
};

export const formatterNetwork = (
  num: string
): { num: string; unit: string } => {
  const temNum = Number(num);
  switch (true) {
    case temNum >= 1024 * 1024:
      return { num: (temNum / (1024 * 1024)).toFixed(2) + "", unit: "GB/s" };
    case temNum < 1024 * 1024 && temNum > 1024:
      return { num: (temNum / 1024).toFixed(1) + "", unit: "MB/s" };
    default:
      return { num, unit: "KB/s" };
  }
};
export function loginCwos(isSelf = true) {
  ssoInfo().then((res: any) => {
    localStorage.setItem("logoutUrl", res.logoutUrl); // 存储 CWOS 登出地址
    localStorage.setItem("ssoLoginUrl", res.ssoLoginUrl); // 存储 CWOS 登录地址
    // 跳转到 CWOS 登录地址
    if (isSelf) {
      window.location.href = res.ssoLoginUrl;
    } else {
      window.open(res.ssoLoginUrl, "_blank");
    }
  });
}

export function delCookie() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
  if (cookies.length > 0) {
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      const domain = location.host.substr(location.host.indexOf("."));
      document.cookie =
        name +
        "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" +
        domain;
    }
  }
}
export const loginJump = () => {
  localStorage.removeItem("access_token");
  const userName = localStorage.getItem("user_name");
  delCookie();
  const ssoLogoutUrl = `${
    window?.config?.LOGIN_URL
  }sso/api/v1/auth/logout?logoutUrl=${window.location.origin}&loginName=${
    userName || ""
  }`;
  window.open(ssoLogoutUrl, "_self");
};

export const downloadFileByBlob = (fileName: string, data: any) => {
  // data为blob格式
  const blob = new Blob([data], {
    type: "text/csv,charset=UTF-8",
  });
  const downloadElement = document.createElement("a");
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  downloadElement.download = fileName;
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href);
};
