import { Loading } from 'element-ui'

let needLoadingRequestCount = 0
let loading

/**
 * 加载
 * @param {*} config
 */
function startLoading(config = {}) {
  loading = Loading.service({
    text: config.message || '加载中',
    background: config.background
  })
}

/**
 * 清除loaing
 */
function closeLoading() {
  if (loading) {
    loading.close()
  }
}

const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    closeLoading()
  }
}

export function showFullScreenLoading(config) {
  if (needLoadingRequestCount === 0 && config.isLoading) {
    needLoadingRequestCount++
    startLoading(config)
  } else {
    needLoadingRequestCount++
  }
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    setTimeout(() => {
      tryCloseLoading()
    }, 200)
  }
}
