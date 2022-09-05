<!--
 * @Description: 表单
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-27 16:53:35
 * @LastEditTime: 2022-07-27 10:59:45
-->
<script setup lang="ts">
import { ref, reactive, computed, useAttrs, watch, onMounted } from "vue";
import FormItem from "@/components/antdvComponents/commonForm/components/FormItem.vue";
import FormInterface from "@/components/antdvComponents/commonForm/interface";

interface Props {
  form: FormInterface.Form;
  fields?: Array<FormInterface.FieldItem>;
  isShowForm?: boolean;
}
const labelCol = { span: 6 };
const wrapperCol = { span: 18 };

const props = withDefaults(defineProps<Props>(), {
  form: () => ({}),
  fields: () => [],
  isShowForm: true,
});

const reactiveForm = reactive(props.form);

const emit = defineEmits(["update:form"]);

const formRef = ref();

const computedForm: any = computed({
  get: () => {
    return props.form;
  },
  set: (value) => {
    emit("update:form", value);
  },
});
defineExpose({
  formRef,
});
</script>

<template>
  <a-form
    ref="formRef"
    class="form"
    layout="horizontal"
    :model="form"
    v-bind="$attrs"
  >
    <a-row :gutter="24">
      <FormItem v-model:form="computedForm" :fields="fields" />
    </a-row>
    <slot></slot>
  </a-form>
</template>

<style lang="scss"></style>
