/**
 * Created by ducen on 2017/7/19.
 */
//原型链的特点在任何时候都可以对基类和子类进行方法的拓展,且所有被实例化的对象或者类都能获取这些方法
//图片轮播类
var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr;
    this.container = container;
}

LoopImages.prototype = {
    //创建轮播图片
    createImage: function () {
        console.log('创建图片。。。')
    },
    //切换下一张图片
    changeImage: function () {
        console.log('切换下一张图片。。。')
    }
}

//上下滑动切换类
var SlideLoopImg = function (imgArr, container,arrow) {
    LoopImages.call(this, imgArr, container)
    this.arrow = arrow;
    // console.log(this.__proto__)
}
console.dir(SlideLoopImg)
SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function () {
    console.log('切换图片已修改。。。')
}
var slideImg = new SlideLoopImg([
        '1.jpg',
        '2.jpg',
        '3.jpg'
    ],
    'slide',
    [
        'left,jpg',
        'right.jpg'
    ]
)

console.log(slideImg.container)
console.log(slideImg.imagesArray)
console.log(slideImg.createImage())
console.log(slideImg.changeImage())
