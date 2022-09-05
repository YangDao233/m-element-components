<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-13 15:38:48
 * @LastEditTime: 2022-07-22 11:44:15
-->
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { merge } from "lodash";
const defaultOption = {
  column: 2,
  border: true,
  title: "",
};

interface Props {
  options?: any;
  list: any[];
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  options: Object.create(null),
});
const mergeOptions = () => {
  return merge(defaultOption, props.options);
};
onMounted(() => {});
onUnmounted(() => {});
</script>

<template>
  <el-descriptions v-bind="mergeOptions()">
    <el-descriptions-item
      v-for="(item, index) in list"
      :key="index"
      :label="item.name"
      :span="item.span"
      :width="200"
      >{{ item.value }}</el-descriptions-item
    >
  </el-descriptions>
</template>

<style scoped lang="scss"></style>
