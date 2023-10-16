<template>
  <div id="app">
    <p>{{ count }}</p>
    <button @click="add({ amount: 5 })">increment</button>
    <button @click="increment3">increment3</button>
    <button @click="$store.dispatch('incrementAsync', { amount: 7 })">
      increment7
    </button>
    <p>{{ doneTodos }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  mounted () {
    console.log('getters', this.$store.getters.doneTodos);
  },
  methods: {
    // increment() {
    //  this.$store.commit('increment')
    // }
    ...mapMutations({
      add: 'increment'
    }),
    ...mapActions(['increment3'])
  },
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count
  // }),
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  computed: { ...mapState(['count']), ...mapGetters(['doneTodos']) }
}
</script>