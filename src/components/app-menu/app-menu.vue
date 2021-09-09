<!--
 * @Author: your name
 * @Date: 2021-09-09 14:32:24
 * @LastEditTime: 2021-09-09 15:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-portal/src/components/app-menu/app-menu.vue
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo">
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">子应用1</span>
    </el-menu-item>
    <el-menu-item index="3" >
      <i class="el-icon-document"></i>
      <span slot="title">子应用2</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">子应用3</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  props: {
  },
  computed: {
  },
};
</script>
<style lang="less" scoped>

</style>
