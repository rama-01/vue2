<template>
  <div class="child-1">
    <p>props: {{ pChild1 }}</p>
    <p>$attrs: {{ $attrs }}</p>
    <child-2 v-bind="$attrs" v-on="$listeners"></child-2>
  </div>
</template>
<script>
import Child2 from "./Child2.vue";
export default {
  props: ["pChild1"],
  components: { Child2 },
  // inheritAttrs: false,
  mounted() {
    this.$emit("test1"); // 触发APP.vue中的test1⽅法
  },
};
</script>
