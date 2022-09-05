<template>
  <div>
    <a-table
      class="common-table ant-table-striped"
      :columns="props.columns"
      :row-class-name="
        (record, index) => (index % 2 === 1 ? 'table-striped' : '')
      "
      table-layout="fixed"
      :data-source="dataSource"
      :pagination="false"
      bordered
      v-bind="$attrs"
      @resize-column="handleResizeColumn"
    >
      <template #bodyCell="{ column, record, index }">
        <slot :name="column.dataIndex" v-bind="{ column, record, index }">
          <span v-if="column.dataType === 'index'">{{ index + 1 }}</span>
          <span v-else-if="column.dataType === 'date'">
            {{
              record[column.dataIndex]
                ? dayjs(record[column.dataIndex]).format(column.format)
                : "--"
            }}
          </span>
        </slot></template
      >
    </a-table>
    <div v-if="props.pagination" class="pagination-box">
      <a-pagination v-bind="tablePagination" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, h, ref } from "vue";
import dayjs from "dayjs";
import { merge } from "lodash";
interface Pagination {
  pageNo: number;
  pageSize: number;
  total: number;
}

interface Props {
  dataSource: Array<any>;
  columns: Array<any>;
  pagination: Pagination | boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => [],
  columns: () => [],
  pagination: () => ({
    pageNo: 1,
    pageSize: 8,
    total: 0,
  }),
});

const emit = defineEmits(["currentChange", "sizeChange"]);
const tablePagination = computed(() => {
  if (!props.pagination) {
    return false;
  }
  const lastItem = {
    current: (props.pagination as Pagination).pageNo,
    pageSize: (props.pagination as Pagination).pageSize,
    total: (props.pagination as Pagination).total,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50"],
    showTotal: () => {
      return `本次查询到${(props.pagination as Pagination).total}条数据。`;
    },
    onShowSizeChange: (pageNo: number, pageSize: number) => {
      (props.pagination as Pagination).pageNo = pageSize;
      (props.pagination as Pagination).pageNo = 1;
      emit("sizeChange", { pageNo: 1, pageSize });
    },
    onChange: (pageNo: number) => {
      (props.pagination as Pagination).pageNo = pageNo;
      emit("currentChange", pageNo);
    },
  };
  return lastItem;
});
const handleResizeColumn = (w: number, col: any) => {
  col.width = w;
};
</script>
<style scoped lang="scss">
.ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}
:deep(.ant-table) {
  width: 100%;
  .ant-table-placeholder {
    // padding: 100px 16px;

    .ant-empty-description {
      font-size: 16px;
      font-weight: 400;
    }
  }

  .ant-btn > .anticon + span {
    margin-left: 2px;
  }
}
.pagination-box {
  padding-top: 25px;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
