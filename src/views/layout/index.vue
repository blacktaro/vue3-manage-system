<template>
  <div class='layout'>
    123
    <Login></Login>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import Login from "views/login/Login.vue";
export default {
  components: { Login },
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return {
      ...toRefs(state),
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang='scss' scoped>
</style>
