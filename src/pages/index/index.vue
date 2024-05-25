<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <view class="home">
    <text> {{ appStore.count }} </text>
    <uv-button type="primary" @click="increment">
      Increment2
    </uv-button>
  </view>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  color: deepskyblue;
}
</style>
