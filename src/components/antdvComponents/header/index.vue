<!--
 * @Description: 
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-21 18:28:33
 * @LastEditTime: 2022-08-04 14:21:32
-->
<script setup lang="ts">
import { ref,onMounted } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { delCookie, loginJump } from "@/utils/common";
import { logoutLog } from "@/service/api/operationLog";
import { useCommonStore } from "@/store/modules/common";
const router = useRouter();
const user_name = localStorage.getItem("user_name");
const commonStore = useCommonStore();


const loginOut = () => {
  logoutLog().finally(() => {
    loginJump();
  });
};
onMounted(() => {
  console.log("onMounted===header");
  // commonStore.queryUserPermission();
});
</script>

<template>
  <a-row justify="space-between" align="middle" class="header-row">
    <a-row class="logo-container">
      <img class="logo" src="~@/assets/images/logo.png" alt="" />
      <span class="dividing-line">|</span>
      <img class="title" src="~@/assets/images/title.png" alt="" />
    </a-row>
    <a-row class="avatar-container">
      <a-dropdown>
        <div>
          <a-avatar size="small">
            <template #icon><UserOutlined /></template>
          </a-avatar>
          <span class="user-name">{{ user_name }}</span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item> 账号信息 </a-menu-item>
            <a-menu-item @click="loginOut"> 退出登录 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-row>
  </a-row>
</template>

<style lang="scss" scoped>
.header-row {
  height: 100%;
  .logo-container {
    @include flex(row, flex-start, center);
    height: 100%;
    .logo {
      width: 100px;
      height: 28px;
    }
    .dividing-line {
      padding: 0 16px;
      font-size: 20px;
      line-height: 50px;
      color: #fff;
    }
    .title {
      width: 259px;
      height: 23px;
    }
  }
  .avatar-container {
    height: 100%;
    .user-name {
      margin: 0 10px;
      color: #fff;
    }
  }
  :deep(.ant-dropdown-trigger) {
    height: 100%;
    @include flex(row, flex-start, center);
  }
}
</style>
