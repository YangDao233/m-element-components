<script setup lang="ts">
import { ref, computed, watch, useAttrs, ComputedRef, onMounted } from "vue";
interface Props {
  modelValue: any;
  treeData: any[];
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
  set(value) {
    emit("update:modelValue", value);
  },
});
onMounted(() => {
  // console.log("useAttrs", useAttrs());
});
</script>

<template>
  <a-tree-select
    v-model:value="computedValue"
    dropdown-class-name="common-tree-select"
    :tree-data="treeData"
    v-bind="$attrs"
  />
</template>

<style lang="scss">
.common-select {
}
</style>
