// 用户在表单中选好文件
var formElement = document.getElementById('form');
formElement.onsubmit = function (e) {
    // 提交时改为XHR提交
    e.preventDefault();
    var formData = new FormData(formElement);
    xhr('http://test.com/xhr/file', formData);
};
