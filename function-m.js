function printprops(o) {
  for (var p in o) return p + ':' + o[p] + '\n'
}
function distance(x1, y1, x2, y2) {
  var dx = x2 - x1
  var dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}
function fatorial(x) {
  if (x <= 1) return 1
  return x * fatorial(x - 1)
}
var squre = function(x) {
  return x * x
}
var f = function fact(x) {
  if (x <= 1) return 1
  return x * fact(x - 1)
}

function hypqtenuse(a, b) {
  function squre(x) {
    return x * x
  }
  return Math.sqrt(squre(a) + squre(b))
}
console.log(printprops({ x: 1 }))
var total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5)
console.log(total)
var probablity = fatorial(13) / fatorial(3)
console.log(probablity)
var calculator = {
  operand1: 1,
  operand2: 2,
  add: function() {
    this.result = this.operand1 + this.operand2
  }
}
console.log(calculator.add(1, 1))
var o = {
  m: function() {
    var self = this
    console.log(this === o)
    f()
    function f() {
      console.log(this === o)
      console.log(self === o)
    }
  }
}
console.log(o.m())
var p = [1, 2, 3, 4, 5]
function getPropertynames(o, /*optional*/ a) {
  if (a === undefined) a = []
  for (property in o) a.push(property)
  return a
}
var a = getPropertynames(o)
console.log(getPropertynames(p, a))

function f(x, y, z) {
  if (arguments.length != 3) {
    throw new Error(
      'function f call with ' +
        arguments.length +
        'arguments, but it expect 3 arguments'
    )
  }
}
function max() {
  var max = Number.NEGATIVE_INFINITY
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i]
  }
  return max
}
var largest = max(1, 44, 2, 62, 24, 43, 16, 17777, 456, 34)
console.log(largest)
var fatorial = function(x) {
  if (x <= 1) return 1
  return x * arguments.callee(x - 1)
}
function arraycopy(from, from_start, to, to_start) {}
function esaycopy(args) {
  arraycopy(
    args.from,
    args.from_start || 0,
    args.to,
    args.to_start || 0,
    args.length
  )
}
var a = [1, 2, 3, 4, 5],
  b = []
esaycopy({ from: a, to: b, length: 4 })

function sum(a) {
  if (isArrayLike(a)) {
    var total = 0
    for (var i = 0; i < a.length; i++) {
      var elements = a[i]
      if (elements == null) coutinue
      if (isFinite(elements)) total += elements
      else throw new Error('sum() : elements mut be finite numbers')
    }
    return total
  } else throw new Error('')
}
function flexisum(a) {
  var total = 0
  for (var i = 0; i < a.length; i++) {
    var elements = arguments[i],n
    if (elements == null) coutinue
    if (isArray(elements)) n = flexisum.apply(this, elements)
    else if (typeof elements === 'function') n = Number(elements())
    else n = Number(elements)
    if (isNaN(n)) throw Error('')
    total += n
  }
  return total
}
