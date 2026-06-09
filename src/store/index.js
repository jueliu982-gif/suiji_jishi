import { defineStore } from 'pinia'

export const useIndexStore = defineStore('test', {
  state() {
    return {
      count: 1
    }
  },
  getters: {
    countGetter: (state) => {
      return state.count + 1
    }
  },
  actions: {
    jia() {
      this.count = this.count + 1
    }
  }
})