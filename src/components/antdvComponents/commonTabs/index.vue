<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  activeKey: number;
  tabList?: any[];
}
const emit = defineEmits(["update:activeKey"]);
const props = withDefaults(defineProps<Props>(), {
  activeKey: 1,
  tabList: () => [
    {
      tabName: "系统权限",
      key: 1,
      slotName: "sys",
    },
    {
      tabName: "业务权限",
      key: 2,
      slotName: "business",
    },
  ],
});
const computedValue: any = computed({
  get: () => {
    return props.activeKey;
  },
  set: (value) => {
    // console.log("update:activeKey", value);
    emit("update:activeKey", value);
  },
});
</script>

<template>
  <a-tabs v-model:activeKey="computedValue" type="card">
    <a-tab-pane v-for="item in tabList" :key="item.key" :tab="item.tabName">
      <slot :name="item.slotName"></slot>
    </a-tab-pane>
  </a-tabs>
</template>

<style lang="scss" scoped></style>
