<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title }} 随便写一点儿东西
      </text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
$bgColor: #f5f5f5;

.content {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: $bgColor;
  font-size: 15px;
  color: #8f8f94;

  .logo {
    margin: 200rpx auto 50rpx;
    width: 200rpx;
    height: 200rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
}
</style>
