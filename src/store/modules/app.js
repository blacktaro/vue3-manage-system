const state = () => ({
  collapse: false,
  sidebarWidth: 200,
})
// state 的计算属性 但是不会被缓存
const getters = {}
// 封装异步逻辑（异步）
const actions = {
  handleCollapse({ commit }) {
    commit('CHANGE_COLLAPSE_STATUS')
  },
}
// 修改state唯一方法（同步）
const mutations = {
  CHANGE_COLLAPSE_STATUS(state) {
    state.collapse = !state.collapse
    state.sidebarWidth = state.collapse ? 64 : 200
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
