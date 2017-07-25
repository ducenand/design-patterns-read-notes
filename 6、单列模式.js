/**
 * Created by ducen on 2017/7/20.
 */
/**
 * 使用单列模式创建一个小型的代码库
 */
var D = {
    Util: {
        m1: function () {

        },
        m2: function () {

        }

    },
    Tool: {
        too1: function () {

        }
    },
    Ajax: {
        get: function () {

        },
        post: function () {

        }
    },
    other: {
        // ...
    }

}

/**
 * 使用单列模式创建无法修改的静态变量
 * @type {{get}}
 */

var Conf = (function () {
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 0,
        COUNT: 1000
    }
    return {
        get: function (name) {
            return conf[name] ? conf[name] : null;
        }
    }
})();
console.log(Conf.get('COUNT'));  

/**
 * 惰性单列
 */
var LazySingle = (function () {

    var _instance = null;
    function Single() {
        //定义私有属性和方法
        return {
            f1:function () {
                console.log('f1')
            }
        }
    }

    return function () {
        if(!_instance) {
            _instance = Single();
        }
        return _instance
    }


})();
console.log(LazySingle().f1())
