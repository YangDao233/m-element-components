<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-20 10:15:36
 * @LastEditTime: 2022-07-26 18:26:34
-->
<template>
  <div class="not-container">
    <img src="@/assets/images/403.png" class="not-img" alt="403" />
    <div class="not-detail">
      <h2>403</h2>
      <h4>抱歉，该账户无权限访问~🙅‍♂️🙅‍♀️</h4>
      <el-button type="primary" @click="back">返回登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SSO_URL, loginOut } from "@/utils/common";
const back = () => {
  loginOut();
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
