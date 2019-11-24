<template>
  <div class="container">
    <h1 class="title" v-if="1">Hello World</h1>
    <h2>这是简易Vue项目配置23333</h2>
    <h3>html-webpack-plugin</h3>
    <h4>VueLoaderPlugin</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="less">
// @titleColor: red;
@import './theme/base.less';
.container {
  .title {
    color: @titleColor;
  }
}
</style>
