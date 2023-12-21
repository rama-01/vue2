<template>
  <div>
    <div class="mt-2.5 pt-2.5 pl-2.5 text-left font-semibold bg-gray-200">
      运营概况
    </div>
    <div class="p-4">
      <div class="flex flex-nowrap gap-2 mb-2">
        <div
          class="flex flex-1 p-5 border border-black h-24"
          v-for="index in 4"
          :key="index"
        >
          <img
            :src="LogSvg"
            class="w-10 h-10 p-2 mr-2 border border-black rounded-full"
          />
          <div>
            <span>今日新增订单数(笔)</span>
            <p class="text-left text-red-600">0</p>
          </div>
        </div>
      </div>
      <div class="flex flex-nowrap gap-2">
        <div
          class="flex-1 p-5 border border-black h-24"
          v-for="index in 4"
          :key="index"
        >
          world
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
