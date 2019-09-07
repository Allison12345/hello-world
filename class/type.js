function type(o) {
  var t, c, n
  if (o === null) return 'null'
  if (o !== o) return 'nan'
  if ((t = typeof o) !== 'object') return t
  if ((c = classof(o)) !== 'object') return c
  if (
    o.constructor &&
    typeof o.constructor === 'function' &&
    (n = o.constructor.getName())
  ) {
    return n
  }
  return 'Object'
}
const test = function(x) {
  return x * x
}
console.log(type(test))
