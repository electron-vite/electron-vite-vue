import { domReady, loadingBootstrap } from './dom'

; (async function () {
  await domReady();

  let _isCallRemoveLoading = false;
  const { removeLoading, appendLoading } = loadingBootstrap();

  window.removeLoading = () => {
    _isCallRemoveLoading = true;
    removeLoading();
  };

  // 5 秒超时自动关闭
  setTimeout(() => !_isCallRemoveLoading && removeLoading(), 4999);

  appendLoading();
})();
