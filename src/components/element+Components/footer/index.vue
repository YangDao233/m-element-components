<!--
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-06-30 18:54:46
 * @LastEditTime: 2022-07-25 14:53:42
 * @Description: 
-->
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const state = reactive({
  list: [
    {
      name: "主办单位",
      value: "",
    },
    { name: "技术支持", value: "" },
    { name: "联系邮箱", value: "" },
    { name: "网站标识码", value: "" },
    { name: "备案编号", value: "" },
    { name: "版本号", value: "2.0" },
  ],
});
</script>

<template>
  <el-row justify="center" align="middle" class="footer-row">
    <el-row class="footer-content">
      <div class="list-box">
        <div class="bg"></div>
        <div class="list-content">
          <div v-for="(item, index) in state.list" :key="index" class="list-item">
            {{ item.name }}: {{ item.value }}
          </div>
        </div>
      </div>
    </el-row>
  </el-row>
</template>

<style lang="scss" scoped>
.footer-row {
  // height: 319px;
  height: 84px;
  background-color: #111;
  .footer-content {
    // width: 1400px;
    width: 14rem;
    // display: none;
    // padding: 0 50px;
    color: #999;
    // margin-bottom: 60px;
    @include flex(row, center, center);
    .list-box {
      @include flex(row, flex-start, flex-end);
      .bg {
        width: 2.4rem;
        height: 1rem;
        // border: 1px solid rgb(77, 122, 220);
        margin-right: 0.4rem;
        // @include back("@/assets/images/footer-bg.png");
        display: none;
      }
      .list-content {
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(3, 4.5rem);
        row-gap: 20px;
      }
    }
  }
}
</style>
