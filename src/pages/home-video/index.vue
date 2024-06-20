<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchMenu } from '@/service/apis'

const topMvs = ref([])

function gettopMvs() {
  fetchMenu().then((res: any) => {
    topMvs.value = res.data
  })
}
onMounted(() => {
  gettopMvs()
})
</script>

<template>
  <view class="video-container">
    <template v-for="item in topMvs" :key="item.id">
      video..........
    </template>
  </view>
</template>

<style scoped></style>
