window.onerror = function (msg, url, lineNo, columnNo, error) {
    if (~source.indexOf('SDK.js')) {
        // TODO 处理错误
    }

    return false;
};
