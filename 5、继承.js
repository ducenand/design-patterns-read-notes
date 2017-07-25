/**
 * Created by ducen on 2017/7/20.
 */


/**
 * 子类的原型对象
 * 类式继承
 */
//声明父类
function SuperClass() {
    this.superValue = true;
}
//父类添加共有方法
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
}

//申明子类
function SupClass(id) {
    this.id = id;
    this.supValue = false;
}
//继承父类

SupClass.prototype = new SuperClass();

//子类添加共有方法
SupClass.prototype.getSupValue = function () {
    return this.supValue;
}

var instance = new SupClass(1);
console.log('=======类式继承=======')
console.log(instance.getSupValue());
console.log(instance.id);
var instanceNew = new SupClass(2);
console.log(instance.id);
console.log(instanceNew.id);
console.log(instance.getSuperValue());
console.log(instance instanceof SuperClass)
console.log(instance instanceof SupClass)


/**
 * 构造函数继承
 */
//创建父类
function SClass(id) {
    this.books = ['javascript','php','css','html'];
    this.id = id;
}
SClass.prototype.showBoos = function() {
    console.log(this.books);
}

//声明子类
function SonClass(id) {
    //继承父类
    SClass.call(this,id);
}

var instance1 = new SonClass(28);
console.log('=====构造函数继承=====');
console.log(instance1.id);
var instance2 = new SonClass(29);
console.log(instance2.id)
console.log(instance1.id)

/**
 * 组合继承
 */















/**
 * 原型链模式继承
 * @returns {F}
 */
function prototypeExtend() {
    var F = function () {
        },
        args = arguments,
        i = 0,
        len = args.length;
    for (; i < len; i++) {
        for (var j in args[i]) {
            F.prototype[j] = args[i][j];
        }
    }
    return new F();
}

var penguin = prototypeExtend({
        speed: 20,
        swim: function () {
            console.log('游泳速度' + this.speed)
        }
    },
    {
        run:function (speed) {
            console.log('跑步速度'+ speed);
        }
    },
    {
        jump:function () {
            console.log('跳跃动作');
        }
    }
)
console.log('=====原型链模式继承=====')
console.log(penguin.run(10));
console.log(penguin.jump());
console.log(penguin.swim());


