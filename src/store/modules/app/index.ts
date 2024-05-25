import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { SetupStoreId } from '@/enum'

export const useAppStore = defineStore(SetupStoreId.App, () => {
  const count = ref(10)

  const douCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  return {
    count,
    douCount,
    increment,
  }
})
