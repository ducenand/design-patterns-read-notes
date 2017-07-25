/**
 * Created by ducen on 2017/7/21.
 * 适配器模式往往是适配两个类不兼容的问题
 */
/**
 *jquery 适配器
 */
// window.A = A = jQuery;

/**
 *参数适配器
 */


function doSomeThing(obj) {

    var _adapter = {
        name:'夏雨荷',
        age:25,
        color:'white',
        size:100,
        price:2000
    }

    for(var i in _adapter) {
        _adapter[i] = obj[i] || _adapter[i];
    }
    //do thing

    return _adapter
}


var F = doSomeThing({
    name:'乾隆',
    age: 50,
    color:'brown'
})

console.log(F)
