<template>
  <div>
    <Header class="max-h-20" />
    <Table :bannerList="bannerList" />
  </div>
</template>

<script>
import Header from '@/business/content/banner/header.vue'
import Table from '@/business/content/banner/table.vue'
import { getBannerList } from '@/api/banner'
export default {
  components: {
    Header,
    Table
  },
  data() {
    return {
      bannerList: [],
      queryParams: {
        //文章列表查询参数
        page: 1,
        pageSize: 100,
        title: '',
        status: '',
        storeId: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getBannerList(this.queryParams).then(
        ({
          data: {
            dataList: { content }
          }
        }) => {
          this.bannerList = content
        }
      )
    }
  }
}
</script>
