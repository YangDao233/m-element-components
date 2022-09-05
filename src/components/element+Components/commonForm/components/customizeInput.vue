<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 21:10:41
 * @LastEditTime: 2022-07-15 17:08:04
-->
<script setup lang="ts">
import { valueEquals } from "element-plus";
import { ref, computed, ComputedRef } from "vue";

interface Props {
  value: any;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
});

const emit = defineEmits(["update:value"]);
const computedValue = computed({
  get: () => {
    return props.value;
  },
  set: (value) => {
    // value.replace(/[^\d.]/g, "").replace(/([0-9]+\.[0-9]{2})[0-9]*/, "$1");
    // console.log("test", value);
    emit("update:value", value);
  },
});
</script>

<template>
  <el-input
    v-model="computedValue"
    clearable
    placeholder="请输入"
  />
</template>

<style lang="scss"></style>
