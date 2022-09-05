<!--
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 21:10:41
 * @LastEditTime: 2022-07-27 11:09:55
 * @Description: 
-->
<script setup lang="ts">
import { ref, computed, watch, reactive, ComputedRef } from "vue";
import { cloneDeep, orderBy } from "lodash";
import CommonInput from "./CommonInput.vue";
import CommonInputPwd from "./CommonInputPwd.vue";
import CommonSelect from "./CommonSelect.vue";
import CommonRangePicker from "./CommonRangePicker.vue";
import CommonCascader from "./CommonCascader.vue";
import CommonSwitch from "./CommonSwitch.vue";
import CommonTreeSelect from "./CommonTreeSelect.vue";
import CommonTransfer from "./CommonTransfer.vue";
import CommonSpecialTable from "./CommonSpecialTable.vue";
import CommonInputNumber from "./CommonInputNumber.vue";
import FormInterface from "../interface";
import { Form } from "ant-design-vue";

interface Props {
  form: FormInterface.Form;
  fields: Array<FormInterface.FieldItem>;
}

const labelCol = { span: 7 };
const wrapperCol = { span: 17 };

interface ComponentMap {
  name: any;
}
const formItemContext = Form.useInjectFormItemContext();
const configCol = (item: any) => {
  return item.width
    ? { style: { width: `${item.width}px` } }
    : item.colStyle
    ? item.colStyle
    : {
        md: 12,
        lg: 8,
        xl: 6,
        xxl: 4,
      };
};

const componentMap: Map<string, ComponentMap> = new Map([
  ["input", { name: CommonInput }],
  ["input-pwd", { name: CommonInputPwd }],
  ["select", { name: CommonSelect }],
  ["range-picker", { name: CommonRangePicker }],
  ["cascader", { name: CommonCascader }],
  ["switch", { name: CommonSwitch }],
  ["tree-select", { name: CommonTreeSelect }],
  ["transfer", { name: CommonTransfer }],
  ["special-table", { name: CommonSpecialTable }],
  ["input-number", { name: CommonInputNumber }],
]);

const props = withDefaults(defineProps<Props>(), {
  form: () => ({}),
  fields: () => [],
});

const compare = (property: string) => {
  return function (a: FormInterface.FieldItem, b: FormInterface.FieldItem) {
    const value1 = a[property];
    const value2 = b[property];
    return value1 - value2;
  };
};
// 将有order属性的放在数组最前面
const reorganization = (list: FormInterface.FieldItem[]) => {
  const first_list: FormInterface.FieldItem[] = [];
  const second_list: FormInterface.FieldItem[] = [];
  list.forEach((objItem: FormInterface.FieldItem) => {
    Object.prototype.hasOwnProperty.call(objItem, "order")
      ? first_list.push(objItem)
      : second_list.push(objItem);
  });
  return [...first_list, ...second_list];
};

const packFields: ComputedRef<Array<FormInterface.FieldItem>> = computed(() => {
  const fields: Array<FormInterface.FieldItem> = cloneDeep(props.fields);
  // const reorganization_fields = reorganization(fields);
  return orderBy(fields, "order");
});

const isHidden = computed(() => {
  return (fieldHidden: boolean | undefined) => {
    return !fieldHidden ?? true;
  };
});

const reactiveForm = reactive(props.form);
const emit = defineEmits(["update:form", "submit"]);
const computedForm: any = computed<any>({
  get() {
    return props.form;
  },
  set(value) {
    // console.log("===form===", value);
    emit("update:form", value);
  },
});
</script>
<template>
  <template v-for="(item, index) in packFields" :key="index">
    <a-col v-if="isHidden(item.fieldHidden)" v-bind="configCol(item)">
      <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :name="item.value"
        :colon="false"
        label-align="right"
        v-bind="item"
      >
        <component
          :is="componentMap.get(item.itemType as string)?.name"
          v-model:modelValue="computedForm[item.value as string]"
          v-bind="item.field"
        ></component>
      </a-form-item>
    </a-col>
  </template>
</template>

<style scoped lang="scss"></style>
