function xhr(url, params, callback, opts) {
    var XHR = XMLHttpRequest;
    var xhr = new XHR();
    xhr.open('POST', url, true);
    xhr.withCredentials = true;
    if (typeof params === 'string') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    if (callback) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }

            callback(xhr.responseText || '');
        };
    }
    xhr.send(params);
}
xhr('http://test.com/xhr/users', 'id=0067ED');
