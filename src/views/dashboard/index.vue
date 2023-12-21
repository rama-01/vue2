<template>
  <div class="flex flex-col">
    <operation-overview class="flex-1" />
    <common-function class="flex-1" />
    <report-statistics class="flex-1" />
  </div>
</template>

<script>
import OperationOverview from '@/business/dashboard/operation-overview.vue'
import commonFunction from '@/business/dashboard/common-function.vue'
import reportStatistics from '@/business/dashboard/report-statistics.vue'
export default {
  components: {
    OperationOverview,
    commonFunction,
    reportStatistics
  },
  data() {
    return {}
  }
}
</script>
