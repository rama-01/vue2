import Vue from 'vue';

Vue.prototype.confirm = function (titleMsg, callback, successMsg = '删除成功', rejectedMsg = '删除失败', errorMsg = '已取消') {
  Vue.prototype.$confirm(titleMsg, "系统提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "系统提示",
  })
    .then(() => {
      callback()
        .then(() => {
          if (successMsg) {
            Vue.prototype.$message({
              type: "success",
              message: successMsg,
            })
          }
        })
        .catch(() => {
          if (rejectedMsg) {
            Vue.prototype.$message({
              type: "error",
              message: rejectedMsg,
            })
          }
        })
    })
    .catch(() => {
      if (errorMsg) {
        Vue.prototype.$message({
          type: "info",
          message: errorMsg,
        });
      }
    })
}
