/**
 * Created by ducen on 2017/7/17.
 * 建造者模式
 */
var Human =  function(param) {
    this.name = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密';
}

var Named = function(name) {
    //...
    this.name = name;
    this.firstName = name[0]//忽略处理
    this.second = name[1]//忽略处理
}

var Work = function(work) {
    var that = this;
    switch (work){
        case 'code':
            that.work = "工程师";
            that.workDescript = "每天沉醉于编程";
            break;
        case 'UI':
        case 'UE':
            that.work = "设计师";
            that.workDescript = "设计更是似一种艺术";
            break;
        default:
            that.work = work;
            that.workDescript = "这家伙很懒什么也没留";
    }
}
Work.prototype.changeWork = function(work) {
    this.work = work;
}

Work.prototype.chengeDescript = function(Descript) {
    this.workDescript = workDescript;
}

//TODO 备忘录
//创建者

var Person = function(name,work) {
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}


var person = new Person('张思','code');
console.log(person);

