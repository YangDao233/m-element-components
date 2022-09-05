<!--
 * @Author: yangyuxiao yangyuxiao@cloudwalk.com
 * @Date: 2021-11-23 21:09:00
 * @LastEditors: yangyuxiao yangyuxiao@cloudwalk.com
 * @LastEditTime: 2022-08-22 16:21:19
 * @FilePath: \undefinede:\codes\m-element-components\m-element-components\src\components\container\src\navSide\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <m-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></m-menu>
</template>

<script lang='ts' setup>
let props = defineProps<{
  collapse: boolean
}>()

let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  },
  {
    icon: 'Setting',
    name: 'antd表单',
    index: '/antdForm'
  },
  {
    icon: 'ShoppingBag',
    name: 'antd表格',
    index: '/antdTable'
  }
]
</script>

<style lang='scss' scoped>
</style>
