<script setup lang="ts">
import { ref, computed, watch, ComputedRef } from "vue";
interface Props {
  modelValue: any;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed<any>({
  get() {
    return props.modelValue;
  },
  set(value) {
    // console.log("select", value);
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <a-switch v-model:checked="computedValue" v-bind="$attrs" />
</template>

<style lang="scss">
.form-item-select {
}
</style>
