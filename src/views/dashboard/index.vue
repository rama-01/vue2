<template>
  <div class="flex flex-col gap-3">
    <operation-overview class="flex-1" />
    <common-function class="flex-1" />
    <report-statistics class="flex-1" />
  </div>
</template>

<script>
import OperationOverview from '@/business/dashboard/operation-overview.vue'
import CommonFunction from '@/business/dashboard/common-function.vue'
import ReportStatistics from '@/business/dashboard/report-statistics.vue'
export default {
  components: {
    OperationOverview,
    CommonFunction,
    ReportStatistics
  },
  data() {
    return {}
  }
}
</script>
