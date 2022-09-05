<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-11 14:41:07
 * @LastEditTime: 2022-07-19 11:51:21
-->
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";

onMounted(() => {});
onUnmounted(() => {});
</script>

<template>
  <!-- <transition name="slide-scale" mode="out-in"> -->
    <div class="basic-panel">
      <slot></slot>
    </div>
  <!-- </transition> -->
</template>

<style scoped lang="scss">
.basic-panel {
  background: #ffffff;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
}
</style>
