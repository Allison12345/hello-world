var obj = { a: 'custom' }
var a = 'global'
function whatsthis(arg) {
  console.log('a:', this.a, '; arg:', arg)
}
whatsthis()
whatsthis.call(obj, 'call arg1', 'call arg2')
whatsthis.call(obj, ['apply arg1', 'apply arg2'])
// whatsthis.apply(obj, 'call arg1', 'call arg2')
whatsthis.apply(obj, ['apply arg1', 'apply arg2'])

function add(c, d) {
  console.log(this.a + this.b + c + d)
}
var o = { a: 1, b: 3 }
add.call(o, 5, 7)
add.apply(o, [10, 20])

function f() {
  return this.a
}
var g = f.bind({ a: 'azery' })
console.log(g())
var h = f.bind({ a: 'yoo' })
console.log(h())
var z = h.bind({ a: 'aaa' })
console.log(z())
var b = h.bind({ a: 'qqq' })
console.log(b())
var o = { a: 37, f: f, g: g, h: h, b: b, z: z }
console.log(o.f(), o.g(), o.h(), o.b(), o.z())

var globalObject = this
var foo = () => this
console.log(foo() === globalObject)
var obj = { foo, foo }
console.log(obj.foo() === globalObject)
console.log(foo.call(obj) === globalObject)
foo = foo.bind(obj)
console.log(foo === globalObject)

function sum() {
  return this.a + this.b + this.c
}
var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return this.a + this.b + this.c
  }
}
Object.defineProperty(o, 'sum', {
  get: sum,
  enumerable: true,
  configurable: true
})
console.log(o.average, o.sum)
