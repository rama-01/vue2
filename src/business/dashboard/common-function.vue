<template>
  <div class="border border-gray-300 shadow-xl">
    <div class="title-col">常用功能</div>
    <div class="p-4">
      <div class="flex flex-nowrap gap-2 mb-2">
        <div
          class="cell"
          v-for="index in 4"
          :key="index"
        >
          <img
            :src="GithubSvg"
            class="svg"
          />
          <span>收银下单</span>
        </div>
      </div>
      <div class="flex flex-nowrap gap-2">
        <div
          class="cell"
          v-for="index in 4"
          :key="index"
        >
          <img
            :src="GithubSvg"
            class="svg"
          />
          <span>订单管理</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      GithubSvg: require('@/assets/icons/svg/github.svg')
    }
  }
}
</script>
