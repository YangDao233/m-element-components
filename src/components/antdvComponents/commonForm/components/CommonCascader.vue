
<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";

interface Props {
    modelValue: string[];
    options: any[]
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: () => [],
    options: () => [],

});

const emit = defineEmits(["update:modelValue"]);
const computedValue = computed({
    get: () => {
        return props.modelValue;
    },
    set: (value) => {
        // console.log("value", value);
        emit('update:modelValue', value);
    }
})

</script>

<template>
    <a-cascader
        v-model:value="computedValue"
        :options="options"
        v-bind="$attrs"
        popup-class-name="common-cascader"
    />
</template>

<style  lang="scss">
</style>