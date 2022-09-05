<!--
 * @Description:
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 18:28:33
 * @LastEditTime: 2022-07-28 18:19:03
-->
<script setup lang="ts">
import { ref } from "vue";
import MenuInterface from "@/components/antdvComponents/menu/interface";
import {
  MailOutlined,
  FileProtectOutlined,
  FileSearchOutlined,
  ContactsOutlined,
} from "@ant-design/icons-vue";
interface Props {
  menuInfo: MenuInterface.Item;
}

const props = withDefaults(defineProps<Props>(), {
  menuInfo: () => ({
    key: "key",
    title: "title",
    icon: "",
  }),
});
</script>

<template>
  <a-sub-menu :key="menuInfo.auth_url">
    <template #icon>
      <file-search-outlined v-if="menuInfo.icon === 'retrieval'" />
      <contacts-outlined v-else-if="menuInfo.icon === 'management'" />
      <mail-outlined v-else />
    </template>
    <template #title>{{ menuInfo.name }}</template>
    <template v-for="item in menuInfo.children" :key="item.auth_url">
      <template v-if="!item.children">
        <a-menu-item :key="item.auth_url">
          <template #icon>
            <!-- <PieChartOutlined /> -->
          </template>
          {{ item.name }}
        </a-menu-item>
      </template>
      <template v-else>
        <SubItem :key="item.auth_url" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<style scoped lang="scss">
.header {
  height: 100%;
  padding: 0 80px;
  @include flex(row, space-between, flex-end);
}
</style>
