/**
 * 安全的工厂模式
 */
(function () {
    var Factory = function (type, content) {
        if (this instanceof Factory) {
            return new this[type](content)
        } else {
            return new Factory(type, content)
        }

    }

    Factory.prototype = {
        JS: function (content) {
            this.content = content;
            this.addMethod = function () {

            }
            console.log(content);
        },
        JAVA: function (content) {
            console.log(content);
        },
        PHP: function (content) {
            console.log(content);
        }

    }

    var F = new Factory('JS', 'This is Javascript');
    console.log(F)
    Factory('PHP', 'This is PHP');

}());

/**
 * 抽象工厂模式(Abstract Factory)
 */
(function(){
    //抽象工厂方法
    var VehicleFactory = function(subType,superType) {
        if(typeof VehicleFactory[superType] === 'function'){
            function F() {}
            F.prototype = new VehicleFactory[superType]();
            subType.constructor = subType;
            // console.dir(subType.constructor);
            subType.prototype  = new F();
        }else{
            throw new Error('未创建该抽象类');
        }
    }

    VehicleFactory.Car = function () {
        this.type = "Car"
    }

    VehicleFactory.Car.prototype = {
        getPrice : function() {
            return new Error('抽象方法不能调用');
        },
        getSpeed: function () {
            return new Error('抽象方法不能调用');
        }
    }

    var BMW = function(price,speed) {
        this.price = price;
        this.speed = speed;
    }

    VehicleFactory(BMW,'Car');
    BMW.prototype.getPrice = function(){
        return this.price;
    }
    BMW.prototype.getSpeed = function () {
        return this.speed;
    }
    var B = new BMW(1000,999);
    console.log(B.getPrice())
    console.log(B.type)


}())



