<script>
export default {
  name: 'Index',
}
</script>

<template>
  <view class="container">
    <uv-button type="primary" text="确定" />
    <uv-button type="primary" :plain="true" text="镂空" />
    <uv-button type="primary" :plain="true" :hairline="true" text="细边" />
    <uv-button type="primary" :disabled="disabled" text="禁用" />
    <uv-button type="primary" loading loading-text="加载中" />
    <uv-button type="primary" icon="map" text="图标按钮" />
    <uv-button type="primary" shape="circle" text="按钮形状" />
    <uv-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))" />
    <uv-button type="primary" size="small" text="大小尺寸" />
  </view>
</template>

<style lang="scss" scoped>
.contanier {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
