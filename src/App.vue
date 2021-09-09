<template>
  <layout></layout>
</template>
<script>
import Layout from './layout/index.vue';

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>
<style>
body, html {
  min-width: 1366px;
  overflow-x: auto !important;
}
body {
  margin: 0;
  padding: 0;
}

.portal-sub-app > div {
  height: 100%;
}
</style>
