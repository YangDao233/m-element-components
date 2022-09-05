/*
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-23 10:17:12
 * @LastEditTime: 2022-07-10 09:49:03
 */
export const accountExp = /^[a-zA-Z0-9~!-_—@#$%^&/?|.,:;*]{6,18}$/;
export const emailExp =
  /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export const phoneExp = /^[0-9]{11}$/;
export const codeExp = /^[a-zA-Z0-9]+$/;
export const descExp = /^([\u4e00-\u9fa5]*[A=Za-z]*[0-9]*)+$/;
export const validatePassword = (rule: any, value: any) => {
  if (
    !!value &&
    (value.toString().length < 8 || value.toString().length > 32)
  ) {
    return Promise.reject(new Error("密码长度为8~32位"));
  }
  if (!value.match(/^([.@$!%*#_~?&^]*[a-zA-Z]*[0-9]*)+$/)) {
    return Promise.reject(new Error("密码只能包含字母、数字和特殊字符"));
  } else if (
    value.match(/^[a-zA-Z]+$/) ||
    value.match(/^[0-9]+$/) ||
    value.match(/^[.@$!%*#_~?&^]+$/)
  ) {
    return Promise.reject(
      new Error("密码至少包含字母、数字和特殊字符其中两种")
    );
  }
  return Promise.resolve();
};
