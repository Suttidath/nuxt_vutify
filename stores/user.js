
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1,
    theme:'light'
  }),
  getters: {
    getCount: (state) => state.count,
    getTheme: (state) => state.theme,
  },
  actions: {
    increment() {
      this.count++
    },
    toggleTheme(){
        this.theme = this.theme === 'light' ? 'dark' : "light"
    }
  },
})