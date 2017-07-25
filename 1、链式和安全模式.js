//链式
Function.prototype.addMethod = function (method,fun){
    console.dir(this.prototype)
    this.prototype[method] = fun;
    return this;
};

var f = function()	{};

f.addMethod('checkPhone',function () {
    console.log('checkPhone');
    return this
}).addMethod('checkEmail',function(){
    console.log('checkEmail');
    return this
});

var m = new f();
m.checkPhone().checkEmail()


//安全模式
var Book = function(name,time,type) {
    if(this instanceof Book){
        this.name = name;
        this.time = time;
        this.type = type;
    } else{
        return new Book(name,time,type);
    }
}


var b = Book('权威指南','2017','Js');

console.log(b.name)









