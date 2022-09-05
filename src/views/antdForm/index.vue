<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import BaseForm from "@/components/antdvComponents/commonForm/BaseForm.vue";
import FormInterface from "@/components/antdvComponents/commonForm/interface";

const dictionaryFormRef = ref<InstanceType<typeof BaseForm>>();
const show = ref(false);
const emit = defineEmits(["submit"]);
const dictionaryForm: any = ref({
  dict_id: null,
});
const templateFormRef = ref<InstanceType<typeof BaseForm>>();
const templateForm: any = ref({
  table_def_name: "",
  data: [],
});
const colStyle = {
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24,
};
const rules = {
  table_def_name: [{required: true, message: "请输入模板名称"}],
};

const templateFields = computed<FormInterface.FieldItem[]>(() => [
  {
    label: "模板名称",
    itemType: "input",
    value: "table_def_name",
    colStyle,
    field: {
      placeholder: "请输入模板名称",
      allowClear: true,
    },
    labelCol: {span: 2},
    wrapperCol: {span: 22},
  },
  {
    label: "字典名称",
    itemType: "select",
    value: "dict_id",
    colStyle,
    labelCol: {span: 2},
    wrapperCol: {span: 22},
    field: {
      placeholder: "请选择字典名称",
      allowClear: true,
    },
    options: [
      {
        label: "字典名称1",
        value: 1,
      },
      {
        label: "字典名称2",
        value: 2,
      },
    ],
    modelValue: [
      {
        label: "字典名称1",
        value: 1,
      },
      {
        label: "字典名称2",
        value: 2,
      },
    ],
    style: {
      width: "100%",
    },
  },
  {
    label: "密码",
    itemType: "input",
    value: "password",
    colStyle,
    field: {
      placeholder: "请输入密码",
      allowClear: true,
      type: "password",
    },
    labelCol: {span: 2},
    wrapperCol: {span: 22},
  },
  {
    label: "多选",
    itemType: "select",
    value: "multiple",
    colStyle,
    labelCol: {span: 2},
    wrapperCol: {span: 22},
    field: {
      placeholder: "请选择多选",
      allowClear: true,
    },
    options: [
      {
        label: "多选1",
        value: 1,
      },
      {
        label: "多选2",
        value: 2,
      },
    ],
    style: {
      width: "100%",
    },
    multiple: true,
  },
]);
const handleClose = (value?: boolean) => {
  dictionaryFormRef.value?.formRef.resetFields();
  show.value = false;
};
const handleSubmit = () => {
  dictionaryFormRef.value?.formRef
      .validate()
      .then((values: any) => {
        console.log("===values===", values);
        emit("submit", {
          tableId: dictionaryForm.value.id,
          dict_id: dictionaryForm.value.dict_id,
        });
        handleClose(false);
      })
      .catch((error: any) => {
        console.log("error", error);
      });
};
</script>
<template>
  <div class="modal">
    <BaseForm
        ref="templateFormRef"
        v-model:form="templateForm"
        :fields="templateFields"
        :rules="rules"
        label-align="right  "
    />
    <div class="footer">
      <a-button key="back" @click="handleClose(false)">取 消</a-button>
      <a-button key="submit" type="primary" @click="handleSubmit">
        提 交
      </a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 99%;
  height: 400px;
  overflow: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  .footer {
    text-align: right;

    .ant-btn {
      margin-left: 20px;
    }
  }
}
</style>
