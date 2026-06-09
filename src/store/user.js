import { defineStore } from 'pinia'
import { ref, computed,watch } from 'vue'

export const useUserStore = defineStore('user',() => {
  let name = ref('张三')
  let age = ref(29)
  const info = computed(() => {
    return `我叫${name.value}, 我今年${age.value}岁了`
  })
  watch(name, (newV, oldV) => {
    console.log('watch', newV, oldV)
  })
  function xiugai() {
    name.value = '李四'
    age.value = 30
  }
  return { name, age, info, xiugai }
})