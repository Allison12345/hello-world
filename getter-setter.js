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
var p = {
  x: 1,
  y: 1,
  get r() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  },
  set r(newvalue) {
    var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y)
    var ratio = newvalue / oldvalue
    this.x *= ratio
    this.y *= ratio
  },
  get theta() {
    return Math.atan2(this.y, this.x)
  }
}
var q = inherit(p)
;(q.x = 1), (q.y = 1)
console.log(q.r)
console.log(q.theta)

var serialnum = {
  $n: 0,
  get r() {
    return this.$n++
  },
  set next(n) {
    if (n > this.$n) this.$n = n
  }
}
var random = {
  get octet() {
    return Math.floor(Math.random() * 256)
  }
}
console.log(Object.getOwnPropertyDescriptor(random, 'octet'))
console.log(Object.getOwnPropertyDescriptor({ x: 1 }, 'x'))
var o = {}
Object.defineProperty(o, 'x', {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true
})
console.log(o.x)
console.log(Object.keys(o))
Object.defineProperty(o, 'x', { writable: false })
Object.defineProperty(o, 'x', {
  get: function() {
    return 0
  }
})
console.log(o.x)
var p = Object.defineProperties(
  {},
  {
    x: { value: 1, enumerable: false, configurable: false },
    y: { value: 2, enumerable: true, configurable: false },
    z: {
      get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      },
      enumerable: true,
      configurable: false
    }
  }
)
console.log(p.z)
Object.defineProperty(Object.prototype, 'extend', {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function() {
    var names = Object.getOwnPropertyNames(o)
    for (var i = o; i < names.length; i++) {
      if (names in this) continue
      var desc = Object.getOwnPropertyDescriptor(o, names[i])
      Object.defineProperty(this, names[i], desc)
    }
  }
})
