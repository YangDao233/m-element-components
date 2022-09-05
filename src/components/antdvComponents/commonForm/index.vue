<script setup lang="ts">
import { ref, reactive, computed, useAttrs, watch, onMounted } from "vue";
import FormItem from "./components/FormItem.vue";
import FormInterface from "./interface";

interface Props {
  form: FormInterface.Form;
  fields: Array<FormInterface.FieldItem>;
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

const emit = defineEmits(["update:form", "query"]);

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
const handleResetClick = () => {
  formRef.value.resetFields();
  emit("query", computedForm.value);
};

const handleSubmitClick = (values: any) => {
  emit("query", computedForm.value);
};
// onMounted(() => {
//     console.log("useAttrs", useAttrs());
// })
</script>

<template>
  <a-form
    ref="formRef"
    class="common-form"
    layout="horizontal"
    :model="form"
    v-bind="$attrs"
    @finish="handleSubmitClick"
  >
    <a-row :gutter="24">
      <FormItem v-model:form="computedForm" :fields="fields" />
      <a-col span="2">
        <a-button @click="handleResetClick">重置</a-button>
      </a-col>
      <a-col span="2">
        <a-button type="primary" html-type="submit">查询</a-button>
      </a-col>
      <slot></slot>
    </a-row>
  </a-form>
</template>

<style lang="scss">
.common-form {
  // @include flex(row, flex-start, flex-start, wrap);

  .ant-calendar-picker-input {
    // @include flex(row, flex-start, center);
  }
  .ant-calendar-range-picker-separator {
    font-size: 12px;
    position: relative;
    top: 3px;
  }

  .ant-cascader-picker {
    border-radius: 4px;
    .ant-cascader-picker-label {
      text-align: left;
    }
    .ant-cascader-picker-clear {
      background: transparent;
    }
  }

  .form-button {
    margin-left: 40px;
  }
}

.common-form,
.ant-form {
  .ant-form-item {
    // margin-bottom: 24px;
    // margin-right: 0px;
  }
  .ant-form-item-label > label {
    font-size: 14px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
  }
}
</style>
