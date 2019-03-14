var a = [
  function(x) {
    return x * x
  },
  20
]
console.log(a[0](a[1]))
function add(x, y) {
  return x + y
}
function subtract(x, y) {
  return x - y
}
function multiply(x, y) {
  return x * y
}
function divide(x, y) {
  return x / y
}
function operate(operator, operate1, operate2) {
  return operator(operate1, operate2)
}
var i = operate(add, operate(add, 1, 2), operate(multiply, 4, 5))
console.log(i)

var operators = {
  add: function(x, y) {
    return x + y
  },
  subtract: function(x, y) {
    return x - y
  },
  multiply: function(x, y) {
    return x * y
  },
  divide: function(x, y) {
    return x / y
  },
  pow: Math.pow
}
function operate2(operation, operate1, operate2) {
  if (typeof operators[operation] === 'function')
    return operators[operation](operate1, operate2)
  else throw 'unknow operator'
}
var j = operate2('add', 'hello', operate2('add', ' ', 'world'))
var k = operate2('pow', 3, 2)
console.log(j)
console.log(k)

