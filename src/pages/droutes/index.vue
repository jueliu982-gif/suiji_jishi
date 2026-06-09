<template>
  <div>
    动态路由:
    {{ id }}
  </div>
  <div class="color1">
      <p class="text-3  var-box">人物信息</p>
      <p>姓名： {{ name }}</p>
      <p>年龄： {{ age }}</p>
      <p>详细： {{ info }}</p>
      <button @click="xiugai">修改1</button>
      <button @click="xiugai2">修改2</button>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
let id = ref(null)
id.value = route.params.id
// --------------------
import { useUserStore } from '@/store/user.js'
import { storeToRefs } from 'pinia'
const user = useUserStore()
let { name, age, info } = storeToRefs(user)
let { xiugai } = user
function xiugai2() {
  name.value = '王五'
  age.value = 31
}
</script>

<style lang="scss">
@use "@/assets/scss/common" as c;
.color-c {
  color: c.$color;
}
.var-box {
  --color: yellow;
}
.color1 {
  color: var(--color);
}
</style>