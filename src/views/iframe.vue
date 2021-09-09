<!--
 * @Author: your name
 * @Date: 2021-09-09 14:37:23
 * @LastEditTime: 2021-09-09 14:47:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-portal/src/views/iframe.vue
-->
<template>
    <el-main>
        <iframe class="product-iframe" v-if="url" :src="url" frameborder="0"></iframe>
        <h3 v-else> 没有找到该产品！</h3>
    </el-main>
</template>
<script>

export default {
  data() {
    return {
      url: '',
    };
  },
  computed: {
  },
  created() {
  },
};
</script>
<style lang="less" scoped>
.product-iframe {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
