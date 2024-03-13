<template>
  <el-dialog
    title="提示"
    width="50%"
    :close-on-click-modal="false"
    @close="$emit('update:visible', false)"
    append-to-body
    :visible="visible"
  >
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="所属店铺" prop="storeId">
        <el-select v-model="form.storeId" placeholder="所属店铺" class="w-full">
          <el-option class="flex" label="公共所有" :value="0"></el-option>
          <el-option
            v-for="item in storeList"
            class="flex"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="链接" prop="url">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="image"></el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="form.sort"></el-input>
      </el-form-item>
      <el-form-item label="备注信息" prop="description">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input v-model="form.status"></el-input>
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
  props: {
    visible: Boolean,
    data: Object,
    storeList: Array,
  },
  data() {
    return {
      form: {
        title: "",
        image: "",
        storeId: null,
        description: "",
        sort: "",
        status: "",
        url: "",
      },
      rules: {
        title: [
          { required: true, message: "标题不能为空", trigger: "blur" },
          {
            min: 2,
            max: 200,
            message: "标题长度必须介于2 和 200 之间",
            trigger: "blur",
          },
        ],
        image: [{ required: true }],
      },
    };
  },
  watch: {},
  methods: {},
};
</script>
