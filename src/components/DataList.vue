<script setup lang="ts">

import { ref, onMounted } from "vue";
import type { DataItem } from '@/types/index'
import { ElMessage } from "element-plus";
const dialogVisible = ref(false);

type PersonItem = DataItem['list'][number];

const defaultList: Array<DataItem> = [
  {
    type: 1,
    title: "普足",
    list: [
      { id: 1, name: "01" },
      { id: 2, name: "02" },
      { id: 3, name: "03" },
    ],
  },
  {
    type: 2,
    title: "柔式",
    list: [
      { id: 101, name: "101" },
      { id: 102, name: "102" },
      { id: 103, name: "103" },
    ],
  },
  {
    type: 3,
    title: "魅舞",
    list: [
      { id: 1001, name: "佳佳" },
      { id: 1002, name: "芝芝" },
      { id: 1003, name: "贝贝" },
    ],
  },
];

let dataList = ref<DataItem[]>([]);
// 获取初始数据
function getDataList() {
  let localData = localStorage.getItem('personList')
  if (!localData) {
    dataList.value = defaultList;
    return
  }
  dataList.value = JSON.parse(localData)

}
onMounted(() => {
  getDataList();
});
console.log(11111)
// 添加数据弹窗相关数据
let addSelectValue = ref<number | null>(null);
const addListVisiable = ref(false);
let addName = ref<string>('');
let typeOptions = ref([
  { type: 1, title: "普足" },
  { type: 2, title: "柔式" },
  { type: 3, title: "魅舞" },
]);
function addListHandle() {
  if (!addName.value && !addSelectValue.value) {
    ElMessage({
      message: "数据不完整",
      type: "error",
    });
    return
  }
  // 检验名字是否重复
  if (nameVerifyHandle(dataList.value, addName.value)) {
    ElMessage({
      message: "技师工号已存在，请重新输入",
      type: "error",
    });
    return
  }
  let addData: PersonItem = {
    id: Math.ceil(Math.random() * 100000).toString(),
    name: addName.value,
  };
  dataList.value.forEach((item) => {
    if (item.type == addSelectValue.value) {
      item.list.push(addData)
    }
  })
  addListVisiable.value = false
  saveDaveToStorage()
  ElMessage({
    message: "添加成功",
    type: "success",
  });
}
// 校验输入的名字是否重复
function nameVerifyHandle(arr: DataItem[] = [], name: string | null) {
  return arr.reduce<PersonItem[]>((value, item) => {
    return value = [...value, ...item.list]
  }, []).some((item) => { return item.name == name })
}
// 数据存本地
function saveDaveToStorage() {
  localStorage.setItem('personList', JSON.stringify(dataList.value))
}
// 删除人员
function deletePersonHandle(deleteTarget: PersonItem) {
  dataList.value.forEach((lists) => {
    let index = lists.list.findIndex(item => item === deleteTarget)
    if (index !== -1) {
      lists.list.splice(index, 1)
    }
  })
  saveDaveToStorage()
}
// 重置数据
function removeHandle() {
  dataList.value = defaultList
  localStorage.removeItem('personList')
}
</script>

<template>
  <el-button plain @click="dialogVisible = true">
    人员管理
  </el-button>

  <el-dialog v-model="dialogVisible" title="数据列表管理" width="1000">
    <div v-for="list in dataList" :key="list.type">
      <span>{{ list.title }}： </span>
      <el-tag v-for="item in list.list" :key="item.id" closable @close="deletePersonHandle(item)">
        {{ item.name }}
      </el-tag>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="addListVisiable = true">添加</el-button>
        <el-button type="primary" @click="removeHandle">重置</el-button>
        <el-button @click="dialogVisible = false">关闭</el-button>
      </div>
    </template>
    <el-dialog v-model="addListVisiable" title="添加数据" width="500">
      <el-row>
        <el-col :span="4" style="text-align: right; margin-top: 5px">
          <span>类型：</span>
        </el-col>
        <el-col :span="18">
          <el-select v-model="addSelectValue" placeholder="请选择">
            <el-option v-for="option in typeOptions" :key="option.type" :label="option.title" :value="option.type">{{
    option.title }}</el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" style="text-align: right; margin-top: 5px">
          <span>名字：</span>
        </el-col>
        <el-col :span="18">
          <el-input v-model="addName"></el-input>
        </el-col>
      </el-row>

      <template #footer>
        <el-button type="primary" @click="addListHandle">添加</el-button>

      </template>
    </el-dialog>
  </el-dialog>
</template>
