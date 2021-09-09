<!--
 * @Author: your name
 * @Date: 2021-09-09 12:57:00
 * @LastEditTime: 2021-09-09 15:09:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-portal/src/layout/basic-layout.vue
-->
<template>
  <el-container class="app-main-content">
    <app-aside></app-aside>
    <router-view></router-view>
  </el-container>
</template>
<script>
import AppAside from '../components/app-aside';

export default {
  components: {
    AppAside,
  },
  created() {
  },
  computed: {
  },
};
</script>
<style lang = 'less' scoped>

.app-main-content {
  overflow: auto;

  .portal-sub-app {
    height: 100%;
  }
}
</style>
