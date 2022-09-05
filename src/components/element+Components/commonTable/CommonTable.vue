<template>
  <div>
    <div class="query-btn">
      <el-row class="btn-group">
        <el-button
          v-if="btnGroup.includes('packUp-btn')"
          type="primary"
          class="mg-left"
          @click="showMore"
        >
          {{ state.more ? "收起" : "展开" }}检索条件
        </el-button>
        <el-button
          v-if="btnGroup.includes('down-btn')"
          class="down-btn mg-left"
          :loading="downLoading"
          @click="down"
        >
          <el-icon class="icon"><Download /></el-icon>
          <span class="down">下 载 {{ downLoading ? "中" : "" }}</span>
        </el-button>
        <el-button
          v-if="btnGroup.includes('customize-column-btn')"
          type="primary"
          class="mg-left"
          @click="showColumnsDialog"
          >自定义列</el-button
        >
        <slot name="btn-group"></slot>
      </el-row>
    </div>
    <div>
      <el-table
        :data="tableData"
        :stripe="_option.stripe"
        :size="_option.size"
        :show-header="_option.showHeader"
        :tooltip-effect="_option.tooltipEffect"
        :row-style="_option.rowStyle"
        :border="true"
        table-layout="auto"
        :scrollbar-always-on="true"
        v-bind="_option"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
        @cell-click="handleCellClick"
        @sort-change="handleSortChange"
      >
        <template v-for="(col, index) in column" :key="index">
          <!---复选框, 序号 (START)-->
          <el-table-column
            v-if="
              col.type === 'index' ||
              col.type === 'selection' ||
              col.type === 'expand'
            "
            :align="col.align"
            :label="col.label"
            :type="col.type"
            :index="indexMethod"
            :width="col.width"
          />
          <!---复选框, 序号 (END)-->
          <!---图片 (START)-->
          <el-table-column
            v-else-if="col.type === 'image'"
            :align="col.align"
            :label="col.label"
            :width="col.width"
          >
            <template #default="{ row }">
              <!-- 如需更改图片size，可自行配置参数 -->
              <el-avatar :size="50" shape="square" :src="row[col.prop!]" />
            </template>
          </el-table-column>
          <!---图片 (END)-->
          <!-- 自定义slot (START) -->
          <el-table-column
            v-else-if="col.slot"
            :show-overflow-tooltip="col.showOverflowTooltip"
            :width="col.width"
            v-bind="col"
          >
            <template #default="scope">
              <slot
                :name="col.slot"
                :row="scope.row"
                :index="scope.$index"
              ></slot>
            </template>
          </el-table-column>
          <!-- 自定义slot (END) -->
          <!-- 如果传递按钮数组，就展示按钮组 START-->
          <el-table-column
            v-else-if="col.buttons?.length"
            :show-overflow-tooltip="col.showOverflowTooltip"
            :align="col.align"
            :label="col.label"
            :width="col.width"
          >
            <template #default="scope">
              <el-button-group>
                <el-button
                  v-for="(btn, idx) in col.buttons"
                  :key="idx"
                  size="small"
                  :type="btn.type"
                  @click="handleAction(btn.command, scope)"
                  >{{ btn.name }}</el-button
                >
              </el-button-group>
            </template>
          </el-table-column>
          <!-- 如果传递按钮数组，就展示按钮组 END-->
          <!-- 默认渲染列 (START) -->
          <el-table-column
            v-else
            :show-overflow-tooltip="col.showOverflowTooltip"
            :prop="col.prop"
            :align="col.align"
            :width="col.width"
            v-bind="col"
          />
          <!-- 默认渲染列 (END) -->
        </template>
      </el-table>
      <!-- 分页器 -->
      <div v-if="_option.showPagination" class="pagination-box">
        <el-pagination
          v-bind="_paginationConfig"
          @size-change="pageSizeChange"
          @current-change="currentPageChange"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ComputedRef, reactive } from "vue";
import Table from "./interface";

interface TableProps {
  tableData: Array<object>; // table的数据
  column: Table.Column[]; // 每列的配置项
  option?: Table.Option;
  downLoading: boolean;
  btnGroup?: string[];
}
const props = withDefaults(defineProps<TableProps>(), {
  tableData: () => [],
  column: () => [],
  option: () => ({}),
  downLoading: false,
  btnGroup: () => ["packUp-btn", "down-btn", "customize-column-btn"],
});
// 设置option默认值，如果传入自定义的配置则合并option配置项
const _option: ComputedRef<Table.Option> = computed(() => {
  const option = {
    stripe: false,
    tooltipEffect: "dark",
    showHeader: true,
    showPagination: false,
    rowStyle: () => "cursor:pointer", // 行样式
  };
  return Object.assign(option, props?.option);
});
// 合并分页配置
const _paginationConfig = computed(() => {
  const config = {
    total: 0,
    currentPage: 1,
    pageSize: 10,
    pageSizes: [10, 20, 30, 40, 50, 100],
    layout: "total, sizes, prev, pager, next, jumper",
  };
  return Object.assign(config, _option.value.paginationConfig);
});
interface EmitEvent {
  (e: "selection-change", params: any): void; // 当选择项发生变化时会触发该事件
  (e: "row-click", row: any, column: any, event: Event): void; // 当某一行被点击时会触发该事件
  (e: "cell-click", row: any, column: any, cell: any, event: Event): void; // 当某个单元格被点击时会触发该事件
  (e: "command", command: string | number, row: any): void; // 按钮组事件
  (e: "size-change", pageSize: number): void; // pageSize事件
  (e: "current-change", currentPage: number): void; // currentPage按钮组事件
  (e: "sort-change", item: any): void; // 当表格的排序条件发生变化的时候会触发该事件
  (e: "show-columns-dialog"): void; // 设置列
  (e: "show-more", isMore: boolean): void; // 是否搜索条件
  (e: "down"): void; // 下载
}
const state = reactive({
  more: true,
});
const emit = defineEmits<EmitEvent>();
// 自定义索引
function indexMethod(index: number) {
  const tabIndex =
    index +
    (_paginationConfig.value.currentPage - 1) *
      _paginationConfig.value.pageSize +
    1;
  return tabIndex;
}
// 切换pageSize
const pageSizeChange = (pageSize: number) => {
  emit("size-change", pageSize);
};
// 切换currentPage
const currentPageChange = (currentPage: number) => {
  emit("current-change", currentPage);
};
// 按钮组事件
const handleAction = (command: string | number, scope: any) => {
  emit("command", command, scope.row);
};
// 多选事件
const handleSelectionChange = (val: any) => {
  emit("selection-change", val);
};
// 当某一行被点击时会触发该事件
const handleRowClick = (row: any, column: any, event: Event) => {
  emit("row-click", row, column, event);
};
// 当某个单元格被点击时会触发该事件
const handleCellClick = (row: any, column: any, cell: any, event: Event) => {
  emit("cell-click", row, column, cell, event);
};

const handleSortChange = (item: any) => {
  emit("sort-change", item);
};

const showMore = () => {
  state.more = !state.more;
  emit("show-more", state.more);
};
const down = () => {
  emit("down");
};

const showColumnsDialog = () => {
  emit("show-columns-dialog");
};
</script>
<style lang="scss" scoped>
.pagination-box {
  padding-top: 40px;
  @include flex(row, flex-end, flex-start, wrap);
}
:deep(.el-table) {
  .el-table__empty-text {
    line-height: 300px;
  }
}

.query-btn {
  padding: 10px;
  .mg-left {
    margin-right: 10px;
  }

  .down-btn {
    // width: 88px;
    height: 32px;
    background: #ffa800;
    border-radius: 4px;
    font-size: 14px;
    border-color: transparent;
    font-family: "PingFangSC-Regular, PingFang SC";
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
    @include flex(row, center, center);
    .icon {
      margin-right: 2px;
      font-weight: 1200;
      font-size: 18px;
    }
  }
}
</style>
