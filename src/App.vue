<template>
  <div class="container">
    <h1 class="title" v-if="1">Hello World</h1>
    <h3>html-webpack-plugin</h3>
    <h4>VueLoaderPlugin</h4>
    <h4>处理资源路径</h4>
    <img src="../static/Command.png">
    <img :src="url">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: require('../static/Command.png'),
      }
    }
  }
</script>

<style lang="less">
// @titleColor: red;
@import './theme/base.less';
.container {
  // background: url('../static/Command.png');
  .title {
    color: @titleColor;
  }
}
</style>
