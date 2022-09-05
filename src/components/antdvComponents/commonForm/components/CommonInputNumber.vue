<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";

interface Props {
  modelValue: string;
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
  <a-input-number v-model:value="computedValue" v-bind="$attrs" />
</template>

<style lang="scss"></style>
