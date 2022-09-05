<!--
 * @Description:
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 21:10:41
 * @LastEditTime: 2022-07-27 19:35:24
-->
<script setup lang="ts">
import { ref, computed, watch, useAttrs, ComputedRef, onMounted } from "vue";
interface Props {
  modelValue: any;
  options: any[];
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  options: () => [],
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed<any>({
  get() {
    return props.modelValue;
  },
  set(val) {
    const value = val === undefined ? null : val;
    emit("update:modelValue", value);
  },
});
onMounted(() => {
  // console.log("useAttrs", useAttrs());
});
</script>

<template>
  <a-select
    v-model:value="computedValue"
    dropdown-class-name="common-select"
    :options="options"
    :show-search="true"
    option-filter-prop="label"
    v-bind="$attrs"
  ></a-select>
</template>

<style lang="scss">
// .common-select {
// width: 158px;
// }
.ant-form-item .ant-select {
  max-width: 100%;
}
</style>
