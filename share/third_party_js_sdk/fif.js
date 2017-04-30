(function(url){
    // 第一部分
    var dom, doc, where, iframe = document.createElement('iframe');
    iframe.src = 'javascript:false';
    iframe.title = '';
    iframe.role = 'presentation';
    (iframe.frameElement || iframe).style.cssText = 'width:0;height:0;border:0';
    where = document.getElementsByTagName('script');
    where = where[where.length - 1];
    where.parentNode.insertBefore(iframe, where);

    // 第二部分
    try {
        doc = iframe.contentWindow.document;
    } catch(e) {
        // IE下如果主页面修改过document.domain，那么访问用js创建的匿名iframe会发生跨域问题，必须通过js伪协议修改iframe内部的domain
        dom = document.domain;
        iframe.src='javascript:var d=document.open();d.domain="'
            + dom
            + '";void(0);';
        doc = iframe.contentWindow.document;
    }
    doc.open()._l = function() {
        var js = this.createElement('script');
        if (dom) this.domain = dom;
        js.id = 'js-iframe-async';
        js.src = url;
        this.inDapIF = true;
        this.body.appendChild(js);
    };
    doc.write('<body onload="document._l();">');
    doc.close();
})('sdk.js');
