<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-20 10:15:36
 * @LastEditTime: 2022-07-28 12:34:09
-->
<template>
  <div class="not-container">
    <img src="@/assets/images/500.png" class="not-img" alt="500" />
    <div class="not-detail">
      <h2>500</h2>
      <h4>服务器故障 ~~</h4>
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
