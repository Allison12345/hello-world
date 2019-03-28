function f(y){return this.x + y}
const o = {x:1}
const g = f.bind(o)
console.log(g(2))

function bind(f,o){
  if(f.bind) return f.bind(o)
  else return function(){
    return f.apply(o,arguments)
  }
}

var sum = function(x,y){return x+y}
var succ = sum.bind(null,2)
console.log(succ(3))

function f(y,z){return this.x +y+z}
var h = f.bind({x:1},2)
console.log(h(4))