function inherit(p){
    if(p == null) throw TypeError()
    if(Object.creat){
        return object.creat(p)
    }
    var t = typeof p
    if(t !=="function" && t !== "object") throw TypeError()
    function f(){}
    f.prototype = p
    return new f
}
var p = {
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x + this.y*this.y)},
    set r(newvalue){
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y)
        var ratio = newvalue/oldvalue
        this.x *= ratio
        this.y *= ratio
    },
    get theta(){return Math.atan2(this.y ,this.x)}
}
var q = inherit(p)
q.x = 1 , q.y = 1
console.log(q.r)
console.log(q.theta)

var serialnum = {
    $n: 0,
    get r(){return this.$n++},
    set next(n){
        if( n>this.$n) this.$n = n 
    }
}
var random ={
    get octet(){return Math.floor(Math.random()*256)},
}
console.log(Object.getOwnPropertyDescriptor(random,"octet"))
console.log(Object.getOwnPropertyDescriptor({x:1},"x"))