// weabmap.js

const delegateProxyCreater = require('./proxy.js');
/**
 * weakMapBinder WeakMap生成器
 * @param  {HTMLElement}   htmlElement DOM元素
 * @param  {Function} callback    事件监听回调
 * @return {WeakMap}               WeakMap实例
 */

function weakMapBinder (htmlElement, callback) {
    let weakMap = new WeakMap()
    weakMap.set(htmlElement, callback)
    htmlElement.addEventListener(event, weakMap.get(htmlElement))
}

module.exports = weakMapBinder;