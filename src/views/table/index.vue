<template>
  <m-table
      :options="options"
      :data="tableData"
      elementLoadingText="加载中..."
      elementLoadingBackground="rgba(0,0,0,.8)"
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      isEditRow
      pagination
      stripe
      border
      :total="total"
      :currentPage="current"
      :pageSize="pageSize"
      v-model:editRowIndex="editRowIndex"
      @confirm="confirm"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top">
        <template #default>
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
        </template>
        <template #reference>
          <div class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-popover>
    </template>
    <template #editRow="scope">
      <el-button size="small" type="primary" @click="sure(scope.scope)">确认</el-button>
      <el-button size="small" type="danger">取消</el-button>
    </template>
    <template #action="scope">
      <el-button size="small" type="primary" @click="edit(scope.scope)">编辑</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
  </m-table>
</template>

<script lang='ts' setup>
import {TableOptions} from '../../components/table/src/types'
import {ref, onMounted} from 'vue'
import axios from 'axios'

let options: TableOptions[] = [
  {
    prop: 'date',
    label: '日期',
    // width: '180',
    align: 'center',
    slot: 'date',
    editable: true
  },
  {
    prop: 'name',
    label: '姓名',
    // width: '180',
    align: 'center',
    slot: 'name'
  },
  {
    prop: 'address',
    label: '地址',
    align: 'center',
    editable: true
  },
  {
    label: '操作',
    action: true,
    align: 'center'
  }
]
let tableData = ref<any[]>([])
let editRowIndex = ref<string>('')
let svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
// setTimeout(() => {
// tableData.value = [
//   {
//     date: '2016-05-03',
//     name: 'Tom1',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom2',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom3',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom4',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]
// }, 3000)

let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)
// let getData = () => {
//   axios.post('/api/list', {
//     current: current.value,
//     pageSize: pageSize.value,
//   }).then((res: any) => {
//     if (res?.data?.code === '200') {
//       console.log('res', res)
//       tableData.value = res.data.data.rows
//       total.value = res.data.data.total
//       console.log(res.data.data)
//     }
//   })
// }

let data = {
  "code": "200",
  "message": "获取成功",
  "data": {
    "current": 1,
    "pageSize": 10,
    "rows": [
      {
        "date": "2007-11-03",
        "name": "Margaret Thomas",
        "address": "浙江省",
        "rowEdit": false
      },
      {
        "date": "1997-09-01",
        "name": "Paul Wilson",
        "address": "山东省",
        "rowEdit": false
      },
      {
        "date": "2016-10-18",
        "name": "Richard White",
        "address": "山西省",
        "rowEdit": false
      },
      {
        "date": "2017-03-01",
        "name": "Betty Taylor",
        "address": "吉林省",
        "rowEdit": false
      },
      {
        "date": "1973-01-20",
        "name": "Jessica Lopez",
        "address": "湖北省",
        "rowEdit": false
      },
      {
        "date": "1998-11-16",
        "name": "Timothy Garcia",
        "address": "湖南省",
        "rowEdit": false
      },
      {
        "date": "2014-01-24",
        "name": "Kimberly Hernandez",
        "address": "内蒙古自治区",
        "rowEdit": false
      },
      {
        "date": "2011-05-18",
        "name": "Brian Hernandez",
        "address": "天津",
        "rowEdit": false
      },
      {
        "date": "1970-01-18",
        "name": "Matthew Johnson",
        "address": "贵州省",
        "rowEdit": false
      },
      {
        "date": "2012-12-26",
        "name": "Jason Garcia",
        "address": "上海",
        "rowEdit": false
      }
    ],
    "total": 100,
    "totalPages": 10
  }
}

tableData.value = data.data.rows
total.value = data.data.total

let handleSizeChange = (val: number) => {
  pageSize.value = val
  // getData()
}
let handleCurrentChange = (val: number) => {
  current.value = val
  // getData()
}
onMounted(() => {
  // getData()
})


let edit = (scope: any) => {
  // console.log(scope)
  editRowIndex.value = 'edit'
}
let sure = (scope: any) => {
  console.log(scope)
}
let confirm = (scope: any) => {
  // console.log(scope)
}
</script>

<style lang='scss' scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
