<template>
  <div class='header'>
    <div class="header-left">
      <!-- 折叠按钮 -->
      <div
        class="collapse-btn"
        @click="handleCollapse"
      >
        <i
          v-if="!collapse"
          class="el-icon-s-fold"
        ></i>
        <i
          v-else
          class="el-icon-s-unfold"
        ></i>
      </div>
      <div class="title">vue3+element-plus后台管理系统基础模板</div>
      <!-- 面包屑 -->
      <section>
        <the-bread-curmb></the-bread-curmb>
      </section>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <div>
          <i class="el-icon el-icon-full-screen"></i>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip
            effect="dark"
            :content="message?`有${message}条未读消息`:`消息中心`"
            placement="bottom"
          >
            <i class="el-icon el-icon-bell"></i>
          </el-tooltip>
          <span
            class="btn-bell-badge"
            v-if="message"
          ></span>
        </div>
        <!-- 用户头像 -->
        <!-- <div class="user-avator">
          <img src="../../../assets/img/img.jpg" />
        </div> -->
        <!-- 用户名下拉菜单 -->
        <el-dropdown
          class="user-name"
          trigger="click"
          @command="handleCommand"
        >
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                divided
                command="loginout"
              >退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import TheBreadCurmb from "../components/TheBreadCurmb.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { TheBreadCurmb },
  data() {
    return {
      fullscreen: false,
      username: "admin",
    };
  },
  computed: mapState({
    collapse: (state) => state.app.collapse,
  }),
  methods: {
    ...mapActions("app", ["handleCollapse"]),
    handleCommand(command) {},
  },
};
</script>

<style lang='scss' scoped>
.header {
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
  background-color: rgb(50, 65, 87);
  color: #fff;
  .header-left {
    display: flex;
    align-items: center;
    .el-icon-s-fold,
    .el-icon-s-unfold {
      cursor: pointer;
      font-size: 20px;
      margin-right: 20px;
    }
    .title {
      margin-right: 30px;
      font-size: 20px;
    }
  }
  .header-right {
    .header-user-con {
      display: flex;
      align-items: center;
      .user-avator {
        margin-right: 20px;
        img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .el-icon {
        // color: #fff;
        cursor: pointer;
        font-size: 20px;
        margin-right: 20px;
      }
      .el-dropdown-link {
        // color: #fff;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
}
</style>
