import { setTimeout } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,

      // 模块内容（module assets）
      state: {
        count: 0
      }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin () { },
        // -> getters['account/isAdmin']
      },
      actions: {
        login () { },
        addAsync ({ commit }) {
          setTimeout(() => {
            commit('add1')
          }, 1000);
        }
        // -> dispatch('account/login')
      },
      mutations: {
        login () { },
        add1 (state) {
          state.count++
        },
        dec1 (state) {
          state.count--
        }
        // -> commit('account/login')
      },

      // 嵌套模块
      modules: {
        // 继承父模块的命名空间
        myPage: {
          state: () => ({}),
          getters: {
            profile () { } // -> getters['account/profile']
          }
        },

        // 进一步嵌套命名空间
        posts: {
          namespaced: true,

          state: () => ({}),
          getters: {
            popular () { } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})

export default store