import { createStore } from 'vuex'
import actions from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
const store = createStore({
  strict: true, // 严格模式
  state: {},
  actions,
  getters,
  mutations,
})

export default store
