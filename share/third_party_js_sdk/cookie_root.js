var hostname = window.location.hostname;
var domains = hostname.split('.');
var domainLength = domains.length;
var rootDomain = '';
var subDomain = '';
for (var i = domainLength - 1; i >= 0; i--) {
    subDomain = '.' + domains[i] + subDomain;

    document.cookie = 'test=value; domain=' + encodeURIComponent(subDomain) + '; path=/';
    var success = ~document.cookie.indexOf('test=value')
    if (success) {
        rootDomain = subDomain;
        break;
    }
}
console.log(rootDomain);
