function not(f) {
  return function() {
    const result = f.apply(this, arguments)
    return !result
  }
}
const even = function(x) {
  return x % 2 === 0
}
var odd = not(even)
console.log([1, 3, 5, 7].every(odd))
//this指返回函数执行时的作用域，返回函数时直接执行的，this指代的是全局对象 游览器中是window node中是global
function compose(f,g){
  return function(){
    return f.call(this,g.apply(this,arguments))
  }
}
const square = function(x){return x*x}
const sum = function(x,y){return x+y}
const squareofsum = compose(square,sum)
console.log(squareofsum(2,3))