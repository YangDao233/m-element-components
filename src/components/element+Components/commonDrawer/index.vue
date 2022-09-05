<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-13 11:14:30
 * @LastEditTime: 2022-07-13 16:29:28
-->
<script setup lang="ts">
import { computed, ref } from "vue";
import { merge } from "lodash";

interface Options {
  [propName: string]: any;
}

interface Props {
  modelValue: boolean;
  title?: string;
  options?: Options;
}
const defaultOption = {
  size: "15%",
  modal: true,
  appendToBody: true,
  closeOnClickModal: true,
};
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: "详情",
  options: Object.create(null),
});
const modelDialog = () => {
  return merge(defaultOption, props.options);
};
const computedModelValue = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const emit = defineEmits(["update:modelValue", "handleCancel"]);

const handleCancel = (done: () => void) => {
  emit("handleCancel", done);
};
</script>

<template>
  <el-drawer
    v-model="computedModelValue"
    v-bind="modelDialog()"
    :before-close="handleCancel"
  >
    <div>
      <slot></slot>
    </div>
  </el-drawer>
</template>

<style lang="scss">
.el-drawer {
  overflow: hidden;
  .el-drawer__title {
    color: #333;
    font-size: 16px;
    font-weight: 600;
  }
}
/****************************自定义滚动条**********************************/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  width: 8px;
  border-radius: 50px;
  border: 0 none #fff;
  background: rgba(151, 168, 190, 0.35);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(151, 168, 190, 0.78);
}
::-webkit-scrollbar-track {
  border: 0;
  border-radius: 50px;
  background: rgba(151, 168, 190, 0.18);
}
</style>
