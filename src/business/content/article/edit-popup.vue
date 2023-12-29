<template>
  <el-dialog
    title="提示"
    width="50%"
    :close-on-click-modal="false"
    @close="$emit('update:visible', false)"
    append-to-body
    :visible="visible">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.brief"></el-input>
      </el-form-item>
      <el-form-item label="图片" class="image-cont">
        <!-- 图片上传 -->
        <el-upload
          class="flex justify-center items-center w-14 h-14 border-solid border-2"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false">
          <img v-if="imageUrl" :src="form.image" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span>（提示：点击图片修改，建议尺寸：640 x 350）</span>
      </el-form-item>
      <el-form-item label="所属店铺" class="store-of">
        <el-select v-model="form.storeId" placeholder="请选择所属店铺">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <!-- 富文本编辑器 -->
        <rich-text-editor :minHeight="330" v-model="form.description" />
      </el-form-item>
      <el-form-item label="状态" class="status">
        <el-radio-group v-model="form.status">
          <el-radio key="A" label="A" value="A">启用</el-radio>
          <el-radio key="N" label="N" value="N">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">取消</el-button>
      <el-button class="confirmBtn" @click="handleSubmitForm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import richTextEditor from '@/components/rich-text-editor'
import { editSingleArticle } from '@/api/article'
export default {
  components: {
    richTextEditor
  },
  props: {
    visible: Boolean,
    data: Object
  },
  data() {
    return {
      form: {
        //新增或编辑文章
        brief: '',
        description: '',
        id: '',
        image: '',
        sort: 0,
        status: 'A',
        storeId: 0,
        title: ''
      },
      imageUrl: '',
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmitForm() {
      debugger
      this.$refs.form.validate((valid) => {
        if (valid) {
          editSingleArticle(this.form).then(() => {
            this.$emit('update:visible', false)
            this.$emit('action-event', 'addArticle')
            this.$message('新增成功')
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.store-of {
  ::v-deep .el-form-item__content {
    display: flex;
  }
}
.status {
  ::v-deep .el-form-item__content {
    display: flex;
    .el-radio-group {
      display: flex;
      align-items: center;
      height: 32px;
    }
  }
}
.image-cont {
  ::v-deep .el-form-item__content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
