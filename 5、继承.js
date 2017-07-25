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
SuperClass.prototype.getSuperValue = function () {
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
    this.books = ['javascript', 'php', 'css', 'html'];
    this.id = id;
}
SClass.prototype.showBoos = function () {
    console.log(this.books);
}

//声明子类
function SonClass(id) {
    //继承父类
    SClass.call(this, id);
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

//声明父类
function ParentClass(name) {
    //值类型共有属性
    this.name = name;
    //引用类型共有属性
    this.person = ["women", "man", "girl", "boy"];
}

//父类原型共有方法
ParentClass.prototype.getName = function () {
    console.log(this.name);
}
//声明父类
function ParentClass(name) {
    //值类型共有属性
    this.name = name;
    //引用类型共有属性
    this.person = ["women", "man", "girl", "boy"];
}

//父类原型共有方法
ParentClass.prototype.getName = function () {
    console.log(this.name);
}

//声明子类
function ChildClass(name, age) {
    //构造函数继承父类name属性
    ParentClass.call(this, name);
    //子类中新增共有属性
    this.age = age;
}

//类式继承 子类原型继承父类
ChildClass.prototype = new ParentClass();
//子类原型方法
ChildClass.prototype.getAge = function () {
    console.log(this.age);
}

var people = new ChildClass('Alan', 28);
console.log("======组合继承======");
console.log(people.getAge());
console.log(people.getName());
console.log(people.person);
//声明子类
function ChildClass(name, age) {
    //构造函数继承父类name属性
    ParentClass.call(this, name);
    //子类中新增共有属性
    this.age = age;
}

//类式继承 子类原型继承父类
ChildClass.prototype = new ParentClass();
//子类原型方法
ChildClass.prototype.getAge = function () {
    console.log(this.age);
}

var people = new ChildClass('Alan', 28);
console.log("======组合继承======");
console.log(people.getAge());
console.log(people.getName());
console.log(people.person);

/**
 * 原型式继承
 */

function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F;
}

var book = {name:'js',alikeBook:["css book","html book"]};

var newBook = inheritObject(book);
console.log('======原型式继承======');
console.log(newBook.name);

/**
 * 寄生式继承
 */
var book = {name:'js',alikeBook:["css book","html book"]};
function createBook (obj) {
    var o = new inheritObject(obj);
    o.getName = function (name) {
        console.log(name);
    }
    return o;
}
var newBook = createBook(book);
console.log('=====寄生式继承=====');
console.log(newBook);
console.log(newBook.name);

/**
 * 寄生组合式继承
 */

function inheritPrototype(subClass,superClass) {
    //复制一份父类的原型副本保存到变量里
    var p = inheritObject(superClass.prototype);
    //修正因重写子类原型导致子类constructor属性被修改
    p.constructor = subClass;
    // 设置子类的原型
    subClass.prototype = p;
}

// 定义父类
function m(name) {
    this.name = name;
    this.colors = ["red","brown","green","white"]
}


//父类添加共有方法
m.prototype.getName = function () {
    console.log(this.name);
}

//申明子类
function s(name,time) {
    m.call(this,name);
    this.time = time;
}
//寄生式继承父类原型
inheritPrototype(s,m);
s.prototype.getTime = function() {
    console.log(this.time);
}

var s1 = new s("js book","20170602");
var s2 = new s("css book","20170708");
s1.colors.push('black');
console.log("========寄生组合式继承=======");
console.log(s1.colors);
console.log(s2.colors);
console.log(s1.getName());
console.log(s1.getTime());


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
        run: function (speed) {
            console.log('跑步速度' + speed);
        }
    },
    {
        jump: function () {
            console.log('跳跃动作');
        }
    }
)
console.log('=====原型链模式继承=====')
console.log(penguin.run(10));
console.log(penguin.jump());
console.log(penguin.swim());


