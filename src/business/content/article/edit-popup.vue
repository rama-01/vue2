<template>
  <el-dialog
    title="提示"
    width="50%"
    :close-on-click-modal="false"
    @close="$emit('update:visible', false)"
    :visible="visible">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <!-- 图片上传 -->
        <image-upload width="60px" height="50px" />
      </el-form-item>
      <el-form-item label="所属店铺">
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
        <rich-text-editor />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">取消</el-button>
      <el-button type="primary" @click="$emit('update:visible', false)">
        确定
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import imageUpload from '@/components/image-upload'
import richTextEditor from '@/components/rich-text-editor'
export default {
  components: {
    imageUpload,
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
      }
    }
  },
  methods: {}
}
</script>
