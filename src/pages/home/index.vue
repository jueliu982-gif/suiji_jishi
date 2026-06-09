<template>
  <div>
    首页 {{ test.count }} : getter {{ countGetter }}
    <br>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <br>
    <div>
      <p>人物信息</p>
      <p>姓名： {{ name }}</p>
      <p>年龄： {{ age }}</p>
      <p>详细： {{ info }}</p>
      <button @click="xiugai">修改1</button>
      <button @click="xiugai2">修改2</button>
    </div>
  </div>
</template>

<script setup>
import { useIndexStore } from '@/store/index.js'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user.js'
const test = useIndexStore()
const user = useUserStore()
const { count,countGetter } = storeToRefs(test)
const { jia } = test
function jian () {
  // count.value--
  test.count--
}

// --------------------------
let { name, age, info } = storeToRefs(user)
let { xiugai } = user
function xiugai2() {
  name.value = '王五'
  age.value = 31
}
</script>

<style scoped lang="scss">


</style>
