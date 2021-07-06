<template>
  <div
    class="sidebar"
    :style="{ width: sidebarWidth + 'px' }"
    style="transition: width 0.35s"
  >
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu
            :index="item.index"
            :key="item.index"
          >
            <template #title>
              <i
                class="el-icon"
                :class="item.icon"
              ></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
              >{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :index="item.index"
            :key="item.index"
          >
            <i
              class="el-icon"
              :class="item.icon"
            ></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-s-home",
          index: "home",
          title: "系统首页",
        },
      ],
    };
  },
  computed: mapState({
    collapse: (state) => state.app.collapse,
    sidebarWidth: (state) => state.app.sidebarWidth,
  }),
  methods: {},
};
</script>
<style scoped lang="scss">
.sidebar {
  height: 100%;
  padding-top: 80px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  background-color: rgb(50, 65, 87);
  z-index: 9999;
  .title {
    line-height: 60px;
    font-size: 28px;
    color: #fff;
    font-weight: 700;
  }
  .logo {
    width: 80px;
    height: 80px;
    text-align: center;
  }
  .el-menu {
    border: none;
    .el-submenu__title {
      width: 100%;
    }
    .el-icon {
      margin-right: 12px;
    }
  }
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
</style>
