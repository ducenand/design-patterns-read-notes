/**
 * Created by ducen on 2017/7/21.
 */

function Speed(x,y) {
    this.x= x;
    this.y = y;

}
Speed.prototype.run = function () {
    console.log('运动起来');
}


function Color(cl) {
    this.cl = cl;
}
Color.prototype.draw = function () {
    console.log('绘制色彩');
}

function Shape(sp) {
    this.shape = sp;
}

Shape.prototype.change = function () {
    console.log('改变形状');
}



function Ball(x,y,cl) {
    this.speed = new Speed(x,y);
    this.color = new Color(cl);
}

Ball.prototype.init = function() {
    console.log(this.speed.__proto__)
    this.speed.run();
    this.color.draw();
}

var b = new Ball(1,23,43);
b.init();
//运动起来
//绘制色彩
