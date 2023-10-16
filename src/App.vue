<template>
  <div id="app">
    <h1>namespace</h1>
    <p>{{ count }}</p>
    <button @click="add1">add1</button>
    <button @click="$store.commit('account/dec1')">decrement1</button>
    <button @click="$store.dispatch('account/addAsync')">add1 async</button>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex"
export default {
  computed: {
    // ...mapState({
    //   count: state => state.account.count
    // })
    ...mapState('account', {
      count: state => state.count
    })
  },
  methods: {
    ...mapActions(['account/addAsync']),
    ...mapMutations('account', ['add1', 'dec1'])
  }
}
</script>