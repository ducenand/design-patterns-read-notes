/**
 * Created by ducen on 2017/7/21.
 */
// 站长统计img代理

var Count = (function () {
    var img = new Image;

    return function (param) {
        var src = "http://www.999d.com/uploadfile/2017/07/17/201707171028047884.jpg?";
        for (var i in param) {
            src += i + '=' + param[i] + '&'
        }
        if (src.substr(-1, 1) === '&') {
            src = src.slice(0, -1)
        }
        //发送统计数据
        img.src = src;

        console.log(src)
    }

})();

Count({count: 100, type: 'total'})

/**
 * jsonp 通过script的标签
 */

//do some thing...

/**
 * 代理模板 通过iframe
 */


 