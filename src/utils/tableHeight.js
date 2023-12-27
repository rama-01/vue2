const tableHeight = {
  // idArr:['元素的id名'] otherHeight:其他元素的固定高度 windowHeight:null//默认电脑界面高度，传其他则以传入值为最大高度
  // 获取高度
  adaptiveHeight: function(formData) {
    let windowHeight = Number(formData.windowHeight) > 0 ? Number(formData.windowHeight) : document.body.offsetHeight
    for (const item of formData.idArr) {
      windowHeight = windowHeight - document.getElementById(item).offsetHeight
    }
    return (windowHeight - Number(formData.otherHeight)) < 200 ? 200 : windowHeight - Number(formData.otherHeight)
  }
}
export default tableHeight
