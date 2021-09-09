<!--
 * @Author: your name
 * @Date: 2021-09-09 12:57:36
 * @LastEditTime: 2021-09-09 14:13:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-portal/src/layout/index.vue
-->
<template>
  <el-container class="portal-app-main" direction="vertical">
    <app-header></app-header>
    <router-view></router-view>
  </el-container>
</template>
<script>
import AppHeader from '../components/app-header/index';

export default {
  components: {
    AppHeader,
  },
};
</script>
<style lang = 'less' scoped>
.portal-app-main {
  height: 100%;
  background-color: #f2f2f2;
}

.left-sider {
  margin-top: 0;
  border-right: 1px solid rgba(0, 0, 0, .06);
  overflow-x: hidden;
  transition: all .2s;
}

.folded, .folded-icon {
  position: absolute;
  top: 50%;
  font-size: 12px;
  transform: translateY(-50%);
  cursor: pointer;
}

.folded {
  height: 66px;
  border-top: 8px solid rgba(0, 0, 0, 0);
  border-bottom: 8px solid rgba(0, 0, 0, 0);
  border-left: 14px solid #fff;
}

.folded-icon {
  color: #c1c1c1;
}

.dark .folded {
  border-left: 14px solid #444;
}

.dark .folded-icon {
  color: #fff;
}

.dark .left-sider {
  border-right: 1px solid #353535;
  background: #181818;
}

.dark .portal-app-main {
  background-color: #000;
}

.portal-sub-app {
  height: 100%;
}

</style>
