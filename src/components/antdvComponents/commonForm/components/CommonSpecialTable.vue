<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  watch,
  useAttrs,
  ComputedRef,
  onMounted,
} from "vue";
import {
  MinusOutlined,
  PlusOutlined,
  PlusSquareOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons-vue";
import {
  getMockEntityList,
  getMockTemplateList,
} from "@/service/mock/subjectSearch";
import CommonTable from "@/components/antdvComponents/commonTable/CommonTable.vue";
interface Props {
  modelValue: any;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
});

const state: any = reactive({
  entityList: [],
  templateMapEntity: {},
  columns: [
    {
      title: "实体名称",
      dataIndex: "entityId",
      align: "center",
      width: 200,
      resizable: true,
    },
    {
      title: "模板名称",
      dataIndex: "templateId",
      align: "center",
      width: 200,
      resizable: true,
    },
    {
      title: "操作",
      dataIndex: "actions",
      align: "left",
      width: 200,
      resizable: true,
    },
  ],
});

const isDisabled = computed(() => {
  return (id: any, key: any) => {
    return computedDataSource.value.some((it: any) => id === it[key]);
  };
});

const emit = defineEmits(["update:modelValue"]);

const computedDataSource = computed<any>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const entityChange = (value: any, index: number) => {
  // console.log("===value===", value);
  computedDataSource.value[index]!.templateId = null;
};
const handleRemove = (record: any, index: any) => {
  // console.log(record, index);
  computedDataSource.value.splice(index, 1);
};
const handleAdd = (record: any, index: any) => {
  // console.log(record, index);
  computedDataSource.value.push({ entityId: null, templateId: null });
};

onMounted(() => {
  getMockEntityList().then((res: any) => {
    const { list } = res;
    state.entityList = list;
    for (const item of list) {
      getMockTemplateList({ entityId: item.id }).then((templateRes: any) => {
        const { list } = templateRes;
        state.templateMapEntity[item.id] = list.filter(
          (it: any) => it.entityId === item.id
        );
      });
    }
  });
});
</script>

<template>
  <CommonTable
    :pagination="false"
    :data-source="computedDataSource"
    :columns="state.columns"
    v-bind="$attrs"
  >
    <template #entityId="{ record, index }">
      <a-select
        v-model:value="record.entityId"
        placeholder="请选择实体名称"
        :allow-clear="true"
        v-bind="$attrs"
        @change="(value) => entityChange(value, index)"
      >
        <a-select-option
          v-for="(item, idx) in state.entityList"
          :key="idx"
          :disabled="isDisabled(item.id, 'entityId')"
          :value="item.id"
          >{{ item.nameCn }}</a-select-option
        >
      </a-select>
    </template>
    <template #templateId="{ record }">
      <a-form-item-rest>
        <a-select
          v-model:value="record.templateId"
          placeholder="请选择模板名称"
          :allow-clear="true"
          v-bind="$attrs"
        >
          <template
            v-if="record.entityId && state.templateMapEntity[record.entityId]"
          >
            <a-select-option
              v-for="(item, index) in state.templateMapEntity[record.entityId]"
              :key="index"
              :disabled="isDisabled(item.templateId, 'templateId')"
              :value="item.templateId"
              >{{ item.templateName }}</a-select-option
            >
          </template>
        </a-select>
      </a-form-item-rest>
    </template>

    <template #actions="{ record, index }">
      <a-button
        v-if="index !== 0"
        shape="circle"
        size="small"
        class="mg-lf"
        danger
        @click="handleRemove(record, index)"
      >
        <template #icon><MinusOutlined /></template>
      </a-button>
      <a-button
        v-if="index === computedDataSource.length - 1"
        shape="circle"
        size="small"
        @click="handleAdd(record, index)"
      >
        <template #icon><PlusOutlined /></template>
      </a-button>
    </template>
  </CommonTable>
</template>

<style lang="scss">
.mg-lf {
  margin-right: 16px;
}
</style>
