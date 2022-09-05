<!--
 * @Description: 面包屑导航
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 18:28:33
 * @LastEditTime: 2022-07-11 15:37:45
-->
<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from "vue-router";
interface Props {
  routeList?: any[];
}

const router = useRouter();
const route: RouteLocationNormalizedLoaded = useRoute();
const state: any = reactive({
  breadcrumbName: [],
});

const props = withDefaults(defineProps<Props>(), {
  routeList: () => [
    {
      path: "/home",
      breadcrumbName: "数据检索",
      children: [
        {
          path: "/home/entityRetrieval",
          breadcrumbName: "实体检索配置",
        },
        {
          path: "/home/subjectSearch",
          breadcrumbName: "主题检索配置",
        },
        {
          path: "/home/operationLog",
          breadcrumbName: "操作日志",
        },
      ],
    },
    {
      path: "home",
      breadcrumbName: "用户权限管理",
      children: [
        {
          path: "/home/user",
          breadcrumbName: "用户管理",
        },
        {
          path: "/home/role",
          breadcrumbName: "角色管理",
        },
        {
          path: "/home/mechanism",
          breadcrumbName: "机构管理",
        },
        {
          path: "/home/department",
          breadcrumbName: "部门管理",
        },
      ],
    },
  ],
});
const getBreadcrumb = (list: any[], path: string) => {
  state.breadcrumbName = [];
  list.forEach((item) => {
    if (item.children?.length) {
      item.children.forEach((it: any) => {
        if (it.path === path) {
          state.breadcrumbName.push(item.breadcrumbName, it.breadcrumbName);
        }
      });
    }
  });
};
watchEffect(() => {
  const { name } = router.currentRoute.value;
  // console.log("route===", route.path);
  getBreadcrumb(props.routeList, route.path);
});
</script>

<template>
  <a-breadcrumb>
    <a-breadcrumb-item>
      <router-link to="/home/index"> 首页 </router-link></a-breadcrumb-item
    >
    <a-breadcrumb-item v-for="name in state.breadcrumbName" :key="name">{{
      name
    }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<style lang="scss" scoped></style>
