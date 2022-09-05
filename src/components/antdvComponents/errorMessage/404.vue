<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-20 10:15:36
 * @LastEditTime: 2022-07-28 12:34:14
-->
<template>
  <div class="not-container">
    <img src="@/assets/images/404.png" class="not-img" alt="404" />
    <div class="not-detail">
      <h2>404</h2>
      <h4>抱歉，您访问的页面不存在~</h4>
      <a-button type="primary" @click="back">返回首页</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const back = () => {
  router.push({ path: "/" });
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
