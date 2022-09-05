<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 21:16:39
 * @LastEditTime: 2022-07-11 14:45:04
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

const modelDialog = computed(() =>
  merge(
    {
      width: "800px",
      mask: true,
      getContainer: document.body.querySelector("#app"),
      maskClosable: false,
      centered: true,
    },
    props.options
  )
);

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: "详情",
  options: Object.create(null),
});

const emit = defineEmits(["update:modelValue", "handleCancel"]);

const handleCancel = () => {
  emit("handleCancel", false);
  emit("update:modelValue", false);
};
</script>

<template>
  <a-modal
    :visible="modelValue"
    v-bind="modelDialog"
    @ok="handleCancel"
    @cancel="handleCancel"
  >
    <template #title>
      <div class="dialog-title">
        <span>{{ props.title }}</span>
      </div>
    </template>
    <div class="body-container">
      <slot></slot>
    </div>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </a-modal>
</template>

<style lang="scss">
.ant-modal {
  overflow: hidden;
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
