<!--
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-30 17:12:47
 * @LastEditTime: 2022-08-12 14:54:54
 * @Description:
-->
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { CaretBottom, User, Expand } from "@element-plus/icons-vue";
import { delCookie, loginOut } from "@/utils/common";
import { logoutLog } from "@/service/api/common/common";
import { useCommonStore } from "@/store/modules/common";
const commonStore = useCommonStore();
const user_name = localStorage.getItem("user_name");
const get_orgname = localStorage.getItem("get_orgname");
const user_type = localStorage.getItem("loginInfo")
  ? JSON.parse(localStorage.getItem("loginInfo") as string)?.roles[0]?.name
  : "";
const router = useRouter();
const updatePwd = () => {
  router.push({ name: "modify" });
};
onMounted(() => {
  console.log("onMounted===header");
  commonStore.queryUserPermission();
});

const loginOutPage = () => {
  logoutLog().finally(() => {
    loginOut();
  });
};
function jumper(url: any) {
  // $router.push({ name: 'useDoc' })

  // 跳转到新页面
  window.open(url, "_blank");
}
</script>

<template>
  <el-row justify="space-between" align="middle" class="header-row">
    <el-row class="logo-container">
      <img class="logo" src="~@/assets/images/logo.png" alt="" />
      <span class="dividing-line"></span>
      <span class="title">政务信息共享平台</span>
      <!-- <img class="title" src="~@/assets/images/title.png" alt="" /> -->
    </el-row>
    <el-row class="avatar-container">
      <!--      <a-->
      <!--          class="useDoc"-->
      <!--          :href="/useDoc"-->
      <!--          target="_blank"-->
      <!--      >-->
      <!--        使用文档-->
      <!--      </a>-->
      <span class="useDoc" type="text" @click="jumper('/useDoc')">
        使用文档
      </span>
      <el-dropdown>
        <div class="name-box">
          <div class="user-icon">
            <i class="sf-icon-user-custom"></i>
          </div>
          <!--          <span class="name">{{ user_type }}</span>-->
          <span class="name">{{ get_orgname }}</span>
          <span class="name">{{ user_name }}</span>
          <el-icon><CaretBottom /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="updatePwd">修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- @click="loginOut" -->
      <div class="logout-out-icon" @click="loginOutPage">
        <i class="sf-icon-c-logout"></i>
      </div>
    </el-row>
  </el-row>
</template>

<style lang="scss" scoped>
.header-row {
  height: 100%;
  width: 100%;
  padding: 0px 16px;

  .logo-container {
    @include flex(row, flex-start, center);
    height: 100%;

    .logo {
      width: 100px;
      height: 28px;
    }

    .dividing-line {
      display: inline-block;
      width: 1px;
      height: 30px;
      background-color: #fff;
      margin: 0 16px;
      color: #fff;
    }

    .title {
      // width: 259px;
      // height: 23px;
      letter-spacing: 6px;
      color: #fff;
      font-size: 18px;
    }
  }

  .avatar-container {
    height: 100%;
    @include flex(row, flex-start, center);
    color: #fff;

    .name-box {
      color: #fff;
      @include flex(row, center, center);

      .user-icon {
        margin-right: 10px;

        .sf-icon-user-custom::before {
          font-size: 20px;
        }
      }

      .name {
        margin-right: 10px;
      }
    }

    .logout-out-icon {
      margin-left: 10px;
      cursor: pointer;

      .sf-icon-c-logout::before {
        font-size: 16px;
      }
    }
  }

  .useDoc {
    margin-right: 30px;
    color: #fff;
    font-size: 16px;
    font-family: NotoSansHans;
  }
}
</style>
