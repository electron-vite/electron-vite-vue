// @ts-nocheck

/** docoment 加载完成 */
function domReady(...args) {
  const condition = args.length ? [...args] : ['complete', 'interactive']
  return new Promise(resolve => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

/** 插入 loading */
function insertLoading() {
  const loadingStyle = document.createElement('style');
  const loadingBox = document.createElement('div');

  loadingStyle.textContent += `
  /* https://projects.lukehaas.me/css-loaders/ */
  .loading-box { height: 100vh; width: 100vw; position: fixed; left: 0; top: 0; display: flex; align-items: center; background-color: #242424; z-index: 9; }

  .load1 .loader,
  .load1 .loader:before,
  .load1 .loader:after {
    background: #ffffff;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  .load1 .loader {
    color: #ffffff;
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  .load1 .loader:before,
  .load1 .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }

  .load1 .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .load1 .loader:after {
    left: 1.5em;
  }

  @-webkit-keyframes load1 {

    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }

    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  @keyframes load1 {

    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }

    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }`;

  loadingBox.classList.add('loading-box', 'load1');
  loadingBox.innerHTML += '<div class="loader"></div>';

  const appendLoading = () => {
    document.head.appendChild(loadingStyle);
    document.body.appendChild(loadingBox);
  };

  const removeLoading = () => {
    document.head.removeChild(loadingStyle);
    document.body.removeChild(loadingBox);
  };

  return { loadingStyle, loadingBox, removeLoading, appendLoading }
}

; (async function () {
  await domReady();

  let _isCallClosePreloadLoading = false;
  const { removeLoading, appendLoading } = insertLoading();

  window.ClosePreloadLoading = () => {
    _isCallClosePreloadLoading = true;
    removeLoading();
  };

  // 5 秒超时自动关闭
  setTimeout(() => !_isCallClosePreloadLoading && removeLoading(), 4999);

  appendLoading();
})();
