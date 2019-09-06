function array(a, n) {
  return Array.prototype.slice.call(a, n || 0)
}
const f = function(x, y, z) {
  return x * (y - z)
}
function partialLeft(f) {
  var args = arguments
  return function() {
    var a = array(args, 1)
    a = a.concat(array(arguments))
    return f.apply(this, a)
  }
}
function partialRight(f) {
  var args = arguments
  return function() {
    var a = array(arguments)
    a = aa.concat(array(args, 1))
    return f.apply(this, a)
  }
}
function partial(f) {
  var args = arguments
  return function() {
    var a = array(args, 1)
    var i = 0,
      j = 0
    for (; i < a.length; i++) {
      if (a[i] === undefined) a[i] = arguments[j++]
    }
    a = a.concat(array(arguments, j))
    return f.apply(this, a)
  }
}
console.log(partialLeft(f, 2)(4, 6))
console.log(partial(f, undefined, 3)(2, 8))
