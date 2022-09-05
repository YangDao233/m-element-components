import http from "@/service/http";
import dayjs from "dayjs";
const prefix = "api";

// 错误日志查询接口：
//
// 请求参数：{"login_account":"","option_time":[],"option_type":"","pageNo":1,"pageSize":10}
//
// 接口路径：/api/system/error_log/get_error_log_info/
// 请求方式：POST
export const queryErrorLogList = (params?: any) => {
    params.option_time = params.option_time
        ? params.option_time.map((item: any) => {
            const strTime = dayjs(item).format("YYYY-MM-DD HH:mm:ss");
            return strTime;
        })
        : [];
    return http.post(`${prefix}/system/error_log/get_error_log_info/`, params);
}
