import Vue from 'vue';

Vue.prototype.confirm = function (titleMsg, callback, successMsg, errorMsg) {
  Vue.prototype.$confirm(titleMsg, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "提示",
  }).then(() => {
    callback();``
    if (successMsg) {
      Vue.prototype.$message({
        type: "success",
        message: successMsg,
      });
    }
  }).catch(() => {
    if (errorMsg) {
      Vue.prototype.$message({
        type: "info",
        message: errorMsg,
      });
    }
  })
}
