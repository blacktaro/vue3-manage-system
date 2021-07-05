<template>
  <div class=''>
    this is login
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";

export default {
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
