<template>
  <div>
    <!-- <input class="w-20 border-solid" v-model="message" /> -->
    <input v-bind:value="message" v-on:input="message = $event.target.value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};k
</script>
