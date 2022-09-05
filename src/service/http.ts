import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { message } from "ant-design-vue";
import { pickBy } from "lodash";
import { SSO_URL, authMenuApi } from "@/utils/common";
import router from "@/router";

// const URL: string = import.meta.env.DEV
//   ? window.config.URL_DEV
//   : window.config.URL_PRO;
const URL: string = import.meta.env.VITE_APP_WEB_URL;

// 设置请求头和请求路径
axios.defaults.baseURL = URL;
axios.defaults.timeout = 30000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// 统一错误处理方法
const handleError = (error: any) => {
  console.log("统一错误处理方法", error.response);
  if (error.response) {
    // 处理 http 响应错误
    const response = error.response;
    switch (Number(response.status)) {
      case 400: {
        message.destroy();
        message.error(response.statusText || response.data.message);
        return Promise.reject(response);
      }
      case 401: {
        message.destroy();
        message.error("需重新登录");
        // 跳转登录页
        localStorage.removeItem("access_token");
        if (response.config?.url === authMenuApi) {
          window.location.href = SSO_URL || window.location.href;
        } else {
          setTimeout(() => {
            window.location.href = SSO_URL || window.location.href;
          }, 500);
        }
        return Promise.reject(response);
      }
      case 403: {
        message.destroy();
        message.error(response.statusText || "无权限");
        // 跳转登录页
        setTimeout(() => {
          router.push({ path: "/403" });
        }, 500);
        return Promise.reject(response);
      }
      case 500: {
        router.push({ path: "/500" });
        return Promise.reject(response);
      }
      case 504: {
        message.destroy();
        message.error("接口连接异常");
        return Promise.reject(response);
      }
      default:
        if (response.statusText === "") {
          if (response.data && response.data.message) {
            message.error(response.data.message);
          }
        } else {
          message.error(response.statusText);
        }
        return null;
    }
  } else if (error.request) {
    message.error(error.message);
    // 处理http请求错误
    return Promise.reject(error);
  } else {
    // 处理其他错误
    return Promise.reject(error);
  }
};

// 添加请求拦截器
axios.interceptors.request.use(
  function (config: any): AxiosRequestConfig<any> {
    // 在发送请求之前做些什么
    // config.headers.token = "your token";
    // 添加请求token
    // 配置请求
    const accessToken = JSON.parse(
      JSON.stringify(localStorage.getItem("access_token"))
    );
    if (accessToken) {
      config.headers.common.Authorization = `${accessToken}`;
    }
    // const cwToken = localStorage.getItem("userToken");
    // if (cwToken) {
    //   config.headers.common.cwToken = cwToken;
    // }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  const result = response.data;
  /**
   * 后端返回的标准数据 request body
   * {
   *    code: number, // 状态码
   *    data: any, // 数据
   *    message: string, // 信息
   * }
   */
  // console.log(result);
  if (result.code === 200) {
    return result.data ? result.data : [];
  }

  if (response.data instanceof Blob) {
    return Promise.resolve(response.data);
  }

  const error = {
    response: {
      ...response,
      status: result.code,
      statusText: result.msg ? JSON.stringify(result.msg) : "error",
    },
  };
  return handleError(error);
}, handleError);

interface ResType<T> {
  code: number;
  data: T;
  msg: string;
  err?: string;
  [propName: string]: any;
}
interface Http {
  get<T>(url: string, params?: any): Promise<ResType<T>>;
  delete<T>(url: string, params?: any): Promise<ResType<T>>;
  post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ResType<T>>;
  put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ResType<T>>;
  patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ResType<T>>;
  upload<T>(url: string, params: any): Promise<ResType<T>>;
  download(url: string): void;
}
const http: Http = {
  get(url, param = {}) {
    const params = pickBy(param, (item) => item !== "");
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res: any) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, { params })
        .then((res: any) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url, data, config?) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then((res: any) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  put(url, data, config?) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, data, config)
        .then((res: any) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  patch(url, data, config?) {
    return new Promise((resolve, reject) => {
      axios
        .patch(url, data, config)
        .then((res: any) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};
export default http;
