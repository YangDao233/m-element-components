<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 21:10:41
 * @LastEditTime: 2022-07-27 11:55:20
-->
<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";

interface Props {
  modelValue: any;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const emit = defineEmits(["update:modelValue"]);
const computedValue = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    // console.log("input", value);
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <a-input-password
    v-model:value="computedValue"
    autocomplete="new-password"
    v-bind="$attrs"
  />
</template>

<style lang="scss"></style>
