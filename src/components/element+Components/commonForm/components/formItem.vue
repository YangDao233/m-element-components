<!--
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 21:10:41
 * @LastEditTime: 2022-07-15 17:58:07
 * @Description: 
-->
<script setup lang="ts">
import { ref, computed, watch, reactive, ComputedRef } from "vue";
import { cloneDeep, orderBy } from "lodash";
import CustomizeInput from "./customizeInput.vue";
import { FromItemTypeEnum } from "@/utils/enum";

interface Props {
  form: object;
  fields: Array<any>;
}

interface ComponentMap {
  name: any;
}

const componentMap: Map<string, ComponentMap> = new Map([
  ["input", { name: CustomizeInput }],
]);

const props = withDefaults(defineProps<Props>(), {
  fields: () => [],
});

const packFields: ComputedRef<Array<any>> = computed(() => {
  const fields: Array<any> = cloneDeep(props.fields);
  return orderBy(fields, "order");
});

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

const isHidden = computed(() => {
  return (fieldHidden: boolean | undefined) => {
    return !fieldHidden ?? true;
  };
});
</script>
<template>
  <template v-for="item in packFields" :key="item.key">
    <el-col v-if="isHidden(item.fieldHidden)" v-bind="item.colStyle">
      <el-form-item :label="item.label" :prop="item.value" v-bind="item">
        <component
          :is="componentMap.get(item.itemType as string)?.name"
          v-model:value="computedForm[item.value as string]"
          v-bind="item.field"
        ></component>
      </el-form-item>
    </el-col>
  </template>
</template>

<style scoped lang="scss">
.el-form--inline .el-form-item {
  //   margin-right: 0;
  width: 100%;
}
</style>
