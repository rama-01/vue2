<template>
  <div class="h-full">
    <operation-overview />
    <common-function />
    <report-statistics />
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
