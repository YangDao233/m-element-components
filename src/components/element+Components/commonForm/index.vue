<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-12 10:36:24
 * @LastEditTime: 2022-07-15 17:57:25
-->
<template>
  <el-form ref="formRef" inline :model="form" :rules="rules">
    <el-row :gutter="24">
      <FormItem v-model:form="computedForm" :fields="fields" />
    </el-row>
    <slot></slot>
  </el-form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import FormItem from "./components/formItem.vue";
interface Props {
  form: object;
  fields: Array<any>;
  rules?: any;
}

const props = withDefaults(defineProps<Props>(), {
  form: () => ({}),
  fields: () => [],
  rules: () => ({}),
});

const emit = defineEmits(["update:form"]);

const formRef = ref();

const computedForm: any = computed({
  get: () => {
    return props.form;
  },
  set: (value) => {
    // console.log("===update form===", value);
    emit("update:form", value);
  },
});

defineExpose({
  formRef,
});
</script>
