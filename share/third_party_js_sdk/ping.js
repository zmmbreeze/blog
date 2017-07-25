function ping(url, callback) {
    var img = new Image();
    window[key] = img;
    var done = function () {
        img.onload = img.onerror = img.onabort = null;
        window[key] = null;
        img = null;
        if (callback) {
            callback();
        }
    };
    img.onload = img.onerror = img.onabort = done;
    img.src = url;
}
ping('http://test.com/ping?id=0067ED&type=pageview');
