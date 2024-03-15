<template>
  <div class="child-2">
    <p>props: {{ pChild2 }}</p>
    <p>$attrs: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  props: ["pChild2"],
  // inheritAttrs: false,
  mounted() {
    this.$emit("test2"); // 触发APP.vue中的test2⽅法
  },
};
</script>
