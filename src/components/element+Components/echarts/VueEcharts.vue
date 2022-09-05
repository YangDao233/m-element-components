<!--
 * @Author: fengzhaoquan@cloudwalk.com
 * @Date: 2022-07-01 18:04:31
 * @LastEditTime: 2022-08-15 15:41:21
 * @Description: 
-->
<script setup lang="ts">
import { watch, onMounted, ref, reactive, nextTick, onUnmounted } from "vue";
import * as eCharts from "echarts";

const ctx = defineProps({
  options: {
    type: Object,
    default: Object.create(null),
  },
  theme: {
    type: [String, Object],
    default: Object.create(null),
  },
});

const eChartsRef = ref(null);
let dom: any;
let chart: any;
const initChart = () => {
  if (!chart) {
    dom = eChartsRef.value;
    chart = eCharts.init(dom, ctx.theme);
  }
  if (ctx.options) {
    chart.setOption(ctx.options);
  }
};

const chartResize = () => {
  chart && chart.resize();
};
onMounted(() => {
  nextTick(() => {
    initChart();
  });
  // setTimeout(() => {
  //   initChart();
  // }, 200);
  window.addEventListener("resize", chartResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", chartResize);
});

const getChartInstance = () => {
  return chart;
};
watch(
  () => ctx.options,
  () => {
    initChart();
  },
  { deep: true }
);
defineExpose({
  getChartInstance,
});
</script>

<template>
  <div ref="eChartsRef" class="e-charts"></div>
</template>

<style lang="scss" scoped>
.e-charts {
  width: 100%;
  height: 100%;
  z-index: 13;
}
</style>
