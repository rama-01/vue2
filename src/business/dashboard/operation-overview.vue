<template>
  <div class="border border-gray-300 shadow-xl">
    <div class="title-col">运营概况</div>
    <div class="p-4">
      <div class="flex flex-nowrap gap-2 mb-2">
        <div class="cell" v-for="index in 4" :key="index">
          <img :src="LogSvg" class="svg" />
          <div>
            <span>今日新增订单数(笔)</span>
            <p class="text-left text-red-600">0</p>
          </div>
        </div>
      </div>
      <div class="flex flex-nowrap gap-2">
        <div class="cell" v-for="index in 4" :key="index">
          <img :src="LogSvg" class="svg" />
          <div>
            <span>今日新增订单数(笔)</span>
            <p class="text-left text-red-600">0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LogSvg: require('@/assets/icons/svg/log.svg')
    }
  }
}
</script>
