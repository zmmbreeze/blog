(function () {
    var pres = document.getElementsByTagName('pre');
    for (var i=0,l=pres.length; i<l; i++) {
        pres[i].className = 'prettyprint';
    }
    prettyPrint();
})();
