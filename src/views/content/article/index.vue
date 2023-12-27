<template>
  <div>
    <Header
      @open="editPopup.visible = true"
      @action-event="handleActionEvent"></Header>

    <Table
      :articleList="articleList"
      :tableHeight="tableHeight"
      @action-event="handleActionEvent"></Table>
    <edit-popup :visible.sync="editPopup.visible" :data="editPopup.data" />
  </div>
</template>

<script>
import Header from '@/business/content/article/header.vue'
import Table from '@/business/content/article/table.vue'
import editPopup from '@/business/content/article/edit-popup.vue'
import { updateArticle, getArticleList } from '@/api/article'

export default {
  components: {
    Header,
    Table,
    editPopup
  },
  data() {
    return {
      editPopup: {
        visible: false,
        data: null
      },
      tableHeight: null, //设置表格高度
      articleList: [], //表格数据
      queryParams: {
        //文章列表查询参数
        pageNum: 1,
        pageSize: 10,
        title: '',
        status: ''
      }
    }
  },
  created() {
    this.getList()
    //获取表格自适应高度
    this.$nextTick(() => {
      // idArr:['元素的id名'] otherHeight:其他元素的固定高度 windowHeight:null//默认电脑界面高度，传其他则以传入值为最大高度
      this.tableHeight = this.$tableHeight.adaptiveHeight({
        idArr: [],
        otherHeight: 156,
        windowHeight: null
      })
    })
  },
  methods: {
    getList() {
      getArticleList(this.queryParams).then(
        ({
          data: {
            dataList: { content }
          }
        }) => (this.articleList = content)
      )
    },
    handleActionEvent(action, data) {
      switch (action) {
        case 'add':
          this.editPopup.visible = true
          break
        case 'edit':
          this.editPopup.visible = true
          break
        case 'delete':
          this.confirm(`是否确认删除文章ID为"${data.id}"的数据项`, () => {
            updateArticle({ id: data.id, status: 'D' })
              .then(() => this.getList())
              .catch(() => this.$message('删除失败！'))
          })
          break
        case 'reset':
          this.getList()
          break
        case 'search':
          this.queryParams.title = data.title
          this.queryParams.status = data.status
          this.getList()
          break
      }
    }
  }
}
</script>
