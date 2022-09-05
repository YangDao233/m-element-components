<!--
 * @Description:
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-24 15:39:22
 * @LastEditTime: 2022-07-25 14:45:35
-->
<script setup lang="ts">
import { ref, computed, watch, useAttrs, ComputedRef, onMounted } from "vue";
interface Props {
  modelValue: any[];
  dataSource: any[];
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  dataSource: () => [],
});

const emit = defineEmits(["update:modelValue"]);
const selectedKeys: any = ref([]);
const computedValue = computed<any>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const handleChange = (
  nextTargetKeys: string[],
  direction: string,
  moveKeys: string[]
) => {
  computedValue.value = nextTargetKeys;
};
const selectChange = (sourceSelectedKeys: any[], targetSelectedKeys: any) => {
  console.log(sourceSelectedKeys, targetSelectedKeys);
  selectedKeys.value = sourceSelectedKeys;
};
onMounted(() => {});
</script>

<template>
  <div>
    <a-transfer
      :data-source="dataSource"
      :target-keys="computedValue"
      v-bind="$attrs"
      @change="handleChange"
      @select-change="selectChange"
    />
  </div>
</template>

<style lang="scss">
.select-box {
  margin-bottom: 10px;
  width: 180px;
}
</style>
