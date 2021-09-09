<!--
 * @Author: your name
 * @Date: 2021-09-09 14:32:24
 * @LastEditTime: 2021-09-09 14:33:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-portal/src/components/app-menu/app-menu-item.vue
-->
<template>
  <div>
    <el-menu-item v-if="!item.children" :index="item.name" @click="handleClick(item)">
      <i :class="item.meta.icon" v-if="item.meta.icon"
        style="margin-right:4px; font-size:16px;"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
    <el-sub-menu v-else :index="''+id" :key="id">
      <template slot="title">
        <i :class="'portal-' + item.meta.icon" v-if="item.meta.icon"
          style="margin-right:4px; font-size:16px; "></i>
        <span>{{ item.meta.title}}</span>
      </template>
      <app-menu-item
        v-for="(child,index) in item.children"
        :id= "`${id}-${index}`"
        :key="index"
        :item="child"
        >
      </app-menu-item>
    </el-sub-menu>
  </div>
</template>

<script>
export default {
  name: 'AppMenuItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    handleClick(item) {
      const { entry } = item.meta;
      if (entry && (entry.startsWith('http') || entry.startsWith('https'))) {
        this.$router.push({
          path: '/show',
          query: {
            code: item.name,
          },
        });
        return;
      }
      if (item.meta && item.meta.type === 'single-spa') {
        this.$router.push({
          path: entry,
        });
      } else {
        this.$router.push({
          name: item.name,
        });
      }
    },
  },
};
</script>
