/**
 * Created by ducen on 2017/7/21.
 */


/**
 * 为输入框添加新需求
 */

//原有代码
var telInput = document.getElementById('tel_input');
var telWarnText = document.getElementById('tel_warn_text');
// console.log()

input.onclick = function () {
    telWarnText.style.display = "inline-block";
}

//装饰者
var decorator = function (input, fn) {
    var input = document.getElementById(input);

    if (typeof input.onclick === 'function') {
        var oldClickFn = input.onclick;
        input.onclick = function () {
            oldClickFn();
            fn();
        }
    } else {
        input.onclick = fn;
    }

}


decorator('tel_input', function () {
    // do some thing ...   
})
