<script setup lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  onMounted,
  ref,
  watchEffect,
} from "vue";
import {
  MailOutlined,
  FileProtectOutlined,
  ContactsOutlined,
} from "@ant-design/icons-vue";
import SubItem from "./components/subItem.vue";
import MenuInterface from "@/components/antdvComponents/menu/interface";
import { useRoute, useRouter } from "vue-router";
import { getAuthMenu } from "@/service/api/common/common";

const router = useRouter();
const route = useRoute();

const state: any = reactive({
  openKeys: [],
  selectedKeys: [],
  menus: [],
});

const findOpenKeys = (list: any, auth_url: any) => {
  const openKeys: any[] = [];
  list.forEach((item: any) => {
    if (item.children?.length) {
      item.children.forEach((it: any) => {
        if (it.auth_url === auth_url) {
          openKeys.push(item.auth_url);
        }
      });
    }
  });
  // console.log("openKeys", openKeys);
  return openKeys;
};

const rootSubmenuKeys = computed(() => {
  const list: any = [];
  state.menus.forEach(function (item: any) {
    if (item.children?.length) {
      list.push(item.auth_url);
    }
  });
  return list;
});
const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(
    (key) => state.openKeys.indexOf(key) === -1
  );
  if (rootSubmenuKeys.value.indexOf(latestOpenKey!) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};
const menuClick = (menuItem: any) => {
  router.push({ path: menuItem.key });
};

onMounted(() => {
  getAuthMenu().then((data: any) => {
    state.menus = data || [];
  });
});
watchEffect(() => {
  const { name, path } = router.currentRoute.value;
  state.selectedKeys = [path];
  state.openKeys = findOpenKeys(state.menus, path);
});
</script>

<template>
  <a-menu
    v-model:selectedKeys="state.selectedKeys"
    :open-keys="state.openKeys"
    mode="inline"
    :inline-indent="24"
    @open-change="onOpenChange"
    @click="menuClick"
  >
    <template v-for="item in state.menus" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.auth_url">
          <template #icon>
            <file-protect-outlined v-if="item.icon === 'retrieval'" />
            <contacts-outlined v-else-if="item.icon === 'management'" />
            <mail-outlined v-else />
          </template>
          {{ item.name }}
        </a-menu-item>
      </template>
      <template v-else>
        <SubItem :key="item.auth_url" :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>

<style scoped lang="scss">
.layout-basic {
  height: 100%;
  .ant-layout-header {
    background: rgb(77, 122, 220);
    padding: 0px 16px;
    font-size: 14px;
    height: 50px;
  }
  .layout-basic-sider {
    background: #fff;
    height: calc(100vh - 50px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .layout-body {
    height: calc(100vh - 50px);
  }
  .layout-container {
    height: 100%;
    background: transparent;
  }
}
</style>
