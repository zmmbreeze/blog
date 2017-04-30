var TEST_COOKIE_NAME = 'TEST_COOKIE_NAME';
var cookieDetect = function () {
    var cookie = 'cookie';
    var doc = window.document;
    // Quick test if browser has cookieEnabled host property
    if (window.navigator.cookieEnabled) {
        return true;
    }
    // Create cookie
    doc[cookie] = TEST_COOKIE_NAME + '=1';
    var ret = doc[cookie].indexOf(TEST_COOKIE_NAME + '=') !== -1;
    // Delete cookie
    doc[cookie] = TEST_COOKIE_NAME + '=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
    return ret;
};
