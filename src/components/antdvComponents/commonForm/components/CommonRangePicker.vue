<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-27 11:20:33
 * @LastEditTime: 2022-08-03 14:09:45
-->
<script setup lang="ts">
import { ref, useAttrs, computed, ComputedRef, onMounted } from "vue";
import moment, { Moment } from "moment";
import dayjs from "dayjs";
interface Props {
  modelValue: Array<any>;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
});

const emit = defineEmits(["update:modelValue"]);

const computedValue: any = computed({
  get: () => {
    return props.modelValue.map((item) => {
      //   console.log("==item==", item);
      return dayjs(item, "YYYY-MM-DD HH:mm:ss");
    });
  },
  set: (value: any) => {
    console.log("==value==", value);
    let newVal: any[] = [];
    if (value) {
      newVal = value.map((item: any) => {
        //   return moment(item).valueOf();
        return dayjs(item, "YYYY-MM-DD HH:mm:ss");
      });
    } else {
      newVal = [];
    }

    emit("update:modelValue", newVal);
  },
});

// onMounted(() => {
//     console.log("$attrs", useAttrs());
// })
</script>

<template>
  <!-- <a-range-picker v-model:value="computedValue" /> -->
  <a-range-picker
    v-model:value="computedValue"
    :show-time="{
      hideDisabledOptions: true,
      defaultValue: [
        moment('00:00:00', 'HH:mm:ss'),
        moment('23:59:59', 'HH:mm:ss'),
      ],
    }"
    dropdown-class-name="common-range-picker"
    separator="——"
    format="YYYY-MM-DD HH:mm:ss"
    v-bind="$attrs"
  />
</template>

<style lang="scss"></style>
