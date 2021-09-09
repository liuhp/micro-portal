<template>

  <el-header class="sys-head">
    <span class="header-logo">
      <router-link to="/index" style="text-decoration: none;">
        <span style="color: #fff">Portal主应用</span>
      </router-link>
    </span>
    <slot />
    <div class="operate">
      <div class="item user-account">
        <el-dropdown class="user-info" trigger="hover">
          <span class="el-dropdown-link">
            <img :src="userIcon" alt="头像" class="avatar" />
            <span style="margin-right:5px;">您好：admin</span>
          </span>
          <el-dropdown-menu slot="dropdown" class="user-info-dropdown">
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>
<script>
import userIcon from './user-default.png';
import logo from './logo.svg';
import theme from './theme-default.png';
// import { setTitle } from '@/utils/util';

export default {
  created() {
  },
  data() {
    return {
      userIcon,
      theme,
      logoDefault: logo,
    };
  },
  computed: {
    logoSrc() {
      return this.logo ? `data:image/png;base64,${this.logo}` : this.logoDefault;
    },
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>

.sys-head {
  position: relative;
  z-index: 200;
  height: 56px;
  line-height: 56px;
  color: #fff;
  background-image: linear-gradient(180deg, #1c4ad4, #2c68ff);

  .horizontal-menu {
    flex: 0 1 835px;
    max-width: 835px;
    height: 64px;
    border: none;
    line-height: 64px;
  }

  .header-logo {
    display: inline-block;
    cursor: pointer;

    a {
      display: inline-block;
      box-sizing: border-box;
      height: 32px;
      line-height: 32px;
      vertical-align: middle;

      .fintech-logo-img {
        height: 100%;
        vertical-align: top;
      }

      .app-title {
        margin-left: 10px;
        font-size: 24px;
        color: #fff;
      }

      .logo-text {
        margin-left: 8px;
        font-size: 24px;
        font-weight: bold;
        line-height: 35px;
        color: #fff;
        vertical-align: top;
      }
    }
  }

  .operate {
    display: flex;
    align-items: center;
    height: 100%;
    float: right;
    font-size: 14px;
    color: rgba(255, 255, 255, .85);

    /deep/ .el-dropdown {
      color: rgba(255, 255, 255, .85) !important;
    }

    .item {
      color: rgba(255, 255, 255, .85);
      cursor: pointer;
    }

    .split {
      width: 1px;
      height: 12px;
      margin: 0 16px;
      background: rgba(255, 255, 255, .6);
    }

    .avatar {
      position: relative;
      width: 30px;
      height: 30px;
      margin-right: 8px;
      border-radius: 50%;
      vertical-align: middle;
    }

    .user-info {
      .el-dropdown-link {
        display: inline-block;
        height: 56px;
      }
    }
  }
}

.dark .sys-head {
  background: #181818;
}
</style>
