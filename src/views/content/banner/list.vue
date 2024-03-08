<template>
  <div>
    <Header class="max-h-20" @action-event="handleActionEvent" />
    <Table :bannerList="bannerList" />
    <edit-popup
      :visible.sync="editPopup.visible"
      :data="editPopup.data"
      @action-event="handleActionEvent" />
  </div>
</template>

<script>
import Header from '@/business/content/banner/header.vue'
import Table from '@/business/content/banner/table.vue'
import editPopup from '@/business/content/banner/edit-popup.vue'
import { getBannerList } from '@/api/banner'
export default {
  components: {
    Header,
    Table,
    editPopup
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
      },
      editPopup: {
        data: null,
        visible: false
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getBannerList(this.queryParams).then(({ dataList: { content } }) => {
        this.bannerList = content
      })
    },
    handleActionEvent(action, data) {
      switch (action) {
        case 'add':
          this.editPopup.visible = true
          break
      }
    }
  }
}
</script>
