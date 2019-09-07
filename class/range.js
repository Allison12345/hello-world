function inherit(p) {
  if (p == null) throw TypeError()
  if (Object.creat) {
    return object.creat(p)
  }
  var t = typeof p
  if (t !== 'function' && t !== 'object') throw TypeError()
  function f() {}
  f.prototype = p
  return new f()
}
function range(from, to) {
  const r = inherit(range.methods)
  r.from = from
  r.to = to
  return r
}
range.methods = {
  includes: function(x) {
    console.log(this)
    return this.from <= x && x <= this.to
  },
  foreach: function(f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) f(x)
  },
  toString: function() {
    return this.from + '>>>' + this.to
  }
}
const e = range(1, 3)
console.log(e.includes(2))
e.foreach(console.log)
