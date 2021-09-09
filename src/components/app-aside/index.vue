<!--
 * @Author: your name
 * @Date: 2021-09-09 14:32:04
 * @LastEditTime: 2021-09-09 15:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-portal/src/components/app-aside/index.vue
-->
<template>
  <el-aside class="portal-app-aside" :width="sideWidth">
    <app-menu></app-menu>
  </el-aside>
</template>

<script>
import AppMenu from '../app-menu';

export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      userInfo: {},
      product: {
        dataList: [],
      },
      isSideCollapse: false,
    };
  },
  components: {
    AppMenu,
  },
  created() {
  },
  computed: {
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.portal-app-aside {
  z-index: 999;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f2f2f2;
  transition: all .3s;
}
</style>
