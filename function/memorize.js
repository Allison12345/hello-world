function memorize(f) {
  var cache = {}
  return function() {
    const key = arguments.length + Array.prototype.join.call(arguments, ',')
    if (key in cache) return cache[key]
    else return (cache[key] = f.apply(this.arguments))
  }
}
function gcd(a, b) {
  var t
  if (a < b) {
    ;(t = b), (b = a), (a = t)
  }
  while (b != 0) {
    ;(t = b), (b = a % b), (a = t)
  }
  return a
}
var gcddmemo = memorize(gcd)
console.log(gcddmemo(1, 3))
