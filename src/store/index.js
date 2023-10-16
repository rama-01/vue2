import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  // payload设计为一个对象，可以传递多个字段
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    }
  },
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
  actions: {
    increment3 (context) {
      context.commit('increment', { amount: 3 })
    },
    // 如果要传递载荷，需要在actions中进行
    incrementAsync ({ commit }, amount) {
      setTimeout(() => {
        commit('increment', amount)
      }, 1000)
    }
  }
})

export default store