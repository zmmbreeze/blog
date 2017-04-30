/**
 * 对接口做一个包装并返回
 * @param {string} methodName 函数在对象上的属性名
 * @param {Object} context 函数所在的对象
 * @param {Function} method 函数
 * @param {number} idx 函数所在的对象
 */
function wrapApi(methodName, context, method, position) {
    context[methodName] = function() {
        try {
            return method.apply(this, arguments)
        } catch (e) {
            // TODO 处理错误，通过position定位
            throw e;
        }
    }
}
