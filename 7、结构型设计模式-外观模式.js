/**
 * Created by ducen on 2017/7/21.
 */
/**
 * 外观模式实现兼容事件绑定
 */


function addEvent(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}

var dom = document.getElementById('div');
addEvent(dom, 'click', function () {
   // do some thing...
})