<template>
  <el-dialog
    title="提示"
    width="50%"
    :close-on-click-modal="false"
    @close="$emit('update:visible', false)"
    append-to-body
    :visible="visible">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="图片" class="image-cont">
        <!-- 图片上传 -->
        <el-upload
          class="flex justify-center items-center w-14 h-14 border-solid border-2"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span>（提示：点击图片修改，建议尺寸：640 x 350）</span>
      </el-form-item>
      <el-form-item label="所属店铺" class="store-of">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <!-- 富文本编辑器 -->
        <rich-text-editor :minHeight="330" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">取消</el-button>
      <el-button class="confirmBtn" @click="$emit('update:visible', false)">
        确定
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import richTextEditor from '@/components/rich-text-editor'
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
        name: '',
        region: ''
      },
      imageUrl: ''
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.store-of {
  ::v-deep .el-form-item__content {
    display: flex;
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
