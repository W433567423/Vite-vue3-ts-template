import { createStore } from 'vuex'
import { IRootState } from './type'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'tutu',
      age: 18,
    }
  },
  modules: {},
})

export default store
