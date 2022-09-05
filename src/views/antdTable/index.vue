<template>
  <div>
    <antdFormTest :form="form"/>
    <a-table :dataSource="dataSource" :columns="columns"/>
  </div>
</template>
<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import antdFormTest from "@/components/antdFormTest/form/index.vue";

const dataSource: any = ref([]);
const columns: any = ref([]);
const form: any = ref([]);

dataSource.value = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

columns.value = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]

// 接受form数据的地方
//  <component
// :placeholder="item.placeholder"
// v-bind="item.attrs"
// :is="`el-${item.type}`"
// v-model="formState[item?.prop!]"
//     >
//     <component
//         v-for="(child, i) in item.children"
//   :key="i"
// :is="`el-${child.type}`"
// :label="child.label"
// :value="child.value"
//     ></component>
//     </component>

// 渲染form组件,使用<component-->
form.value = [
  {
    label: '用户名',
    prop: 'username',
    type: 'input',
    attrs: {
      placeholder: '请输入用户名',
    },
    children: [],
  },
  {
    label: '密码',
    prop: 'password',
    type: 'input',
    attrs: {
      placeholder: '请输入密码',
    },
    children: [],
  },
  {
    label: '记住我',
    prop: 'remember',
    type: 'checkbox',
    attrs: {},
    children: [],
  },
]
</script>
