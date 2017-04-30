Array.prototype.push = function (value) {
    this[this.length] = value;
};


(function isSameComponent(input) {
    var parseURIComponent = function (input) {
            // TODO
            return {component: 'test'};
        },
        component = parseURIComponent(location.search).component
        encodeURIComponent = function (input) {
            return String(input).replace(/([.*+?^=!:${}()|[\]\/\\-])/g, '\\$1');
        };
    return new RegExp(encodeURIComponent(component)).test(input);
})('test');
