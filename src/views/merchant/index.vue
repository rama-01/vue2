<template>
  <div>
    <child-1
      :p-child1="child1"
      :p-child2="child2"
      @test1="onTest1"
      @test2="onTest2"
    ></child-1>
  </div>
</template>
<script>
import Child1 from "./Child1.vue";
export default {
  components: { Child1 },
  data() {
    return {
      child1: "child1",
      child2: "child2",
    };
  },
  methods: {
    onTest1() {
      console.log("test1 running");
    },
    onTest2() {
      console.log("test2 running");
    },
  },
};
</script>
