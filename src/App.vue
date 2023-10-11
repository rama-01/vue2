<template>
 <div>
   <button @click='handleClick'>Toast</button>
 </div>
</template>
<script>
export default {
    name: 'demo',
    methods: {
      handleClick() {
      this.$toast({
        type: 'success',
        msg: '成功',
        duration: 3
      })
    }
  }
}
</script>