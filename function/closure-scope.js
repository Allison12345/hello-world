var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}
console.log(checkscope())
function checkscope1() {
  const scope = 'local scope'
  function f() {
    return scope
  }
  return f
}
console.log(checkscope1()())

var uniqueInteger = (function() {
  const counter = 0
  return function() {
    return counter++
  }
})()

function counter() {
  var n = 0
  return {
    count: function() {
      return n++
    },
    reset: function() {
      n = 0
    }
  }
}
const c = counter() ,d = counter()

console.log(c.count())
console.log(c.count())
console.log(d.count())
console.log(d.count())
console.log(c.reset())
console.log(c.count())

function counter1(n){
  return {
    get count(){
      return n++
    },
    set count(m){
      if(m>=n) n= m
      else throw Error('')
    }
  }
}
const e = counter1(1000)
console.log(e.count)