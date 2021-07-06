<template>
  <div class='layout'>
    <!-- 侧边栏 -->
    <section class="sidebar-container">
      <the-sidebar></the-sidebar>
    </section>
    <main
      class="main"
      :style="{marginLeft: sidebarWidth+'px'}"
      style="transition: margin-left .35s;"
    >
      <el-affix :offset="0">
        <!-- 头部 -->
        <header class="header">
          <the-header></the-header>
        </header>
      </el-affix>
      <!-- 标签栏 -->
      <!-- <section>
        <the-tags-view></the-tags-view>
      </section> -->
      <!-- 内容 -->
      <section class="content">
        <router-view v-slot="{ Component }">
          <transition
            name="move"
            mode="out-in"
          >
            <keep-alive :include="tagsList">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </section>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheSidebar from "./components/TheSidebar.vue";
import { reactive, onMounted, toRefs } from "vue";
import { mapState } from "vuex";

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return {
      ...toRefs(state),
    };
  },
  // mapState辅助函数  建议在组件获取多个状态时使用
  computed: {
    ...mapState({
      sidebarWidth: (state) => state.app.sidebarWidth,
    }),
    // 组件其他的计算属性
  },
  data() {
    return {
      tagsList: [],
    };
  },
};
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  flex-flow: row;
  .sidebar-container {
    height: 100%;
    padding-top: 80px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    background-color: rgb(50, 65, 87);
    z-index: 9999;
  }
  .sidebar-container::-webkit-scrollbar {
    width: 0;
  }
  .main {
    flex: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    .content {
      padding: 10px;
    }
  }
}
</style>
