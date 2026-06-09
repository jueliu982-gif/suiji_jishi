<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted } from "vue";
let moveValue = ref(false);  // 控制是否开始动画
let dataList = ref([]) // 存储的人员数据
let renderList = ref([]) // 每次渲染的随机人员数据
let isShow = ref(false)
// 开始动画
function startAnimation() {
  // 获取初始数据
  getDataList()
  // 获取随机数据
  getRenderList()
  // 打开遮罩，显示随机动画
  isShow.value = true
  moveValue.value = true;


}
// 获取数据
function getDataList() {
  let list = localStorage.getItem('personList')
  if (list) {
    dataList.value = JSON.parse(list).reduce((value, item) => {
      item.list.forEach(i => {
        value.push({
          type: item.type,
          ...i
        })
      })
      return value
    }, [])
  }
}
// 获取随机渲染的数据, 设置选择最后的数据是第10个人
function getRenderList() {
  // let maxlength = dataList.value?.length || 0
  // let randomNum  = Math.ceil(Math.random()*maxlength)
  // let selectedValue = dataList.value[randomNum - 1]
  // 随机打乱数组
  let _renderList = JSON.parse(JSON.stringify(dataList.value))
  _renderList.sort(() => Math.random() - 0.5)
  // 获取想染数据，用随机数组填充渲染数组
  renderList.value = []
  for (let i = 0; i < 20; i++) {
    _renderList.forEach((item) => {
      renderList.value.push({
        index: _renderList.length,
        ...item
      })
    })
  }

}
function onClose() {
  isShow.value = false
  moveValue.value = false
}
</script>

<template>
  <el-button @click="startAnimation">开始</el-button>
  <div class="gacha-wipper" v-if="isShow" @click="onClose">
    <div class="gacha-box">
      <div :class="['card-box', moveValue ? 'animation' : '']">
        <div v-for="item in renderList" :key="item.index" class="card">{{ item.name }}</div>
      </div>

    </div>
    <div class="gacha-mark"></div>
  </div>
</template>

<style scoped>
.gacha-wipper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
}

.gacha-box {
  width: 1400px;
  overflow: hidden;
  /* position: relative; */
}

.card-box {
  display: flex;
}

.gacha-mark {
  width: 200px;
  height: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-100px) translateY(-60px);
  background: transparent;
  /* border: 2px solid #ffd000; */
  border-radius: 5px;
  box-shadow: 0 0 15px #ffd000 inset,
    0 0 20px #ffd000;

}

.animation {
  /* 动画：从左到右 贝塞尔曲线 */
  /* animation: moveLeft 5s cubic-bezier(0.25, 0.46, 0.45, 0.94); */
  animation: moveLeft 5s cubic-bezier(0.25, 0, 0, 1.05);
  /*  forwards 保持动画结束后的位置（不回弹） */
  animation-fill-mode: forwards;
}

/* 关键帧：从左 → 右 */
@keyframes moveLeft {
  0% {
    /* 开始位置：左侧外面 */
    transform: translateX(0%);
    opacity: 1;
  }

  100% {
    /* 结束位置：正常位置 */
    transform: translateX(-4000px);
    opacity: 1;
  }
}

.card {
  width: 180px;
  height: 120px;
  border-radius: 5px;
  background-color: #5642a3;
  color: #fff;
  text-align: center;
  line-height: 120px;
  margin: 10px;
  flex-shrink: 0;
}
</style>
