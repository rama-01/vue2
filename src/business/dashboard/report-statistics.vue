<template>
  <div>
    <div class="title-col">报表统计</div>
    <el-row>
      <el-col class="item" :span="12">
        <commonChart
          v-if="chartData1.length > 0"
          :title="chart1.title"
          :color="chart1.color"
          :chart-type="chart1.chartType"
          :head-list="chart1.header"
          :data-list="chartData1"
          width="100%"
          id="chart1"
          height="400px" />
      </el-col>
      <el-col class="item" :span="12">
        <commonChart
          v-if="chartData2.length > 0"
          :title="chart2.title"
          :color="chart2.color"
          :chart-type="chart2.chartType"
          :head-list="chart2.header"
          :data-list="chartData2"
          width="100%"
          id="chart2"
          height="400px" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getHomeData, getStatisticData } from '@/api/home'
import CommonChart from '@/components/charts'
export default {
  components: {
    CommonChart
  },
  data() {
    return {
      loading: false,
      homeData: {
        todayUser: 0,
        totalUser: 0,
        todayOrder: 0,
        totalOrder: 0,
        todayPay: 0,
        totalPay: 0,
        todayActiveUser: 0,
        totalPayUser: 0
      },
      chart1: {
        title: '近七日订单数量',
        color: '#ff5b57',
        chartType: 'bar',
        header: ['订单统计']
      },
      chart2: {
        title: '近七日会员活跃数',
        color: '#00acac',
        chartType: 'line',
        header: ['会员统计']
      },
      chartData1: [],
      chartData2: []
    }
  },
  created() {
    this.getHomeData()
    this.getChartsData()
  },
  methods: {
    // 查询首页数据
    getHomeData() {
      this.loading = true
      getHomeData().then((res) => {
        this.homeData = res
        this.loading = false
      })
    },
    // 查询统计数据
    getChartsData() {
      const app = this
      app.loading = true
      // 近7日订单数量和活跃会员数量
      getStatisticData({ tag: 'order,user_active' }).then((res) => {
        const labelData1 = res.data[0] ? res.data[0] : []
        const labelData2 = res.data[1] ? res.data[1] : []
        const dataList1 = []
        const dataList2 = []

        res.labels.forEach(function (label, index) {
          const value1 = labelData1[index] ? labelData1[index] : 0
          const value2 = labelData2[index] ? labelData2[index] : 0
          dataList1.push({ name: label, value0: value1 })
          dataList2.push({ name: label, value0: value2 })
        })
        app.chartData1 = dataList1
        app.chartData2 = dataList2
        app.loading = false
      })
    },
    // 页面跳转
    toTarget(url) {
      this.$router.push({ path: url })
    },
    // 去收银台
    toCashier(url) {
      const routeLink = this.$router.resolve({ path: url })
      window.open(routeLink.href, '_blank')
    }
  }
}
</script>
