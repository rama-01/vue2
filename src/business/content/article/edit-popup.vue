<template>
  <el-dialog
    title="提示"
    width="30%"
    :close-on-click-modal="false"
    @close="$emit('update:visible', false)"
    :visible="visible"
  >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">取消</el-button>
      <el-button type="primary" @click="$emit('update:visible', false)"
        >确定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    data: Object
  },
  data() {
    return {}
  },
  methods: {}
}
</script>


