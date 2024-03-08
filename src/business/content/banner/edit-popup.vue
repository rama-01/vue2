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
      <el-form-item label="所属店铺" prop="storeId">
        <el-input v-model="form.storeId"></el-input>
      </el-form-item>
      <el-form-item label="链接" prop="url">
        <el-input v-model="form.storeId"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="image">
        <el-input v-model="form.storeId"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="form.storeId"></el-input>
      </el-form-item>
      <el-form-item label="备注信息" prop="description">
        <el-input v-model="form.storeId"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input v-model="form.storeId"></el-input>
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
export default {
  components: {},
  props: {
    visible: Boolean,
    data: Object
  },
  data() {
    return {
      form: {},
      rules: {}
    }
  },
  watch: {},
  methods: {}
}
</script>
