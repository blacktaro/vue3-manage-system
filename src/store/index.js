import { createStore } from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import app from './modules/app'
const store = createStore({
  strict: process.env.NODE_ENV !== 'production', // 严格模式 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  modules: {
    app,
  },
  mutations,
  actions,
  getters,
})
export default store
