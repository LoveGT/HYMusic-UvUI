<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()

const videoUrl = ref('1111')
</script>

<template>
  <div>視頻 {{ videoUrl }} {{ appStore.count }}</div>
</template>

<style scoped>

</style>
