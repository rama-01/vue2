<template>
  <el-table
    :data="bannerList"
    :height="tableHeight"
    size="small"
    style="width: 100%"
  >
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="title" label="标题" />
    <el-table-column prop="storeId" label="所属店铺" />
    <el-table-column label="图片" />
    <el-table-column prop="createTime" label="创建时间" width="200">
      <template slot-scope="{ row: { createTime } }">
        {{ $utils.parseTime(createTime) }}
      </template>
    </el-table-column>
    <el-table-column prop="updateTime" label="更新时间" width="200">
      <template slot-scope="{ row: { updateTime } }">
        {{ $utils.parseTime(updateTime) }}
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态">
      <template slot-scope="{ row: { id, status, title } }">
        <el-switch
          v-model="status"
          active-value="A"
          inactive-value="N"
          active-color="#66b1ff"
          @change="handleSwitchChange(id, status, title)"
        />
      </template>
    </el-table-column>
    <el-table-column prop="sort" label="排序" />
    <el-table-column label="操作" width="125" fixed="right">
      <template slot-scope="{ row }">
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-edit"
          type="text"
          @click="$emit('action-event', 'edit', row)"
        >
          修改
        </el-button>
        <el-button
          style="padding: 0"
          size="mini"
          icon="el-icon-delete"
          type="text"
          @click="$emit('action-event', 'delete', row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableHeight: Number,
    bannerList: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
