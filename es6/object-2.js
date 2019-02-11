console.log(Object.is('foo', 'foo'))

Object.is(+0, -0)
Object.is(NaN, NaN)
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === y / 1
    }
    return x !== x && y !== y
  },
  configurable: true,
  enumerable: false,
  writable: true
})

const target = { a: 1 }
const source1 = { b: 2 }
const source2 = { c: 3 }

Object.assign(target, source1, source2)
console.log(target)

const obj = { a: 1 }
Object.assign(obj) === obj

typeof Object.assign(2)
Object.assign(obj, undefined) === obj
Object.assign(obj, null) === obj

const v1 = 'abc'
const v2 = true
const v3 = 10
const obj1 = Object.assign({}, v1, v2, v3)
console.log(obj)

Object.defineProperty({}, 'invisible', {
  enumerable: false,
  value: 'hello'
})
Object.assign({ b: 'c' })

Object.assign(Object.assign([1, 2, 3], [4, 5]))

const source = {
  get foo() {
    return 1
  }
}
const target1 = {}
Object.assign(target1, source)

class Point {
  constructor(x, y) {
    Object.assign(this, x, y)
  }
}

function clone(origin) {
  return Object.assign({}, origin)
}

function clone1(origin) {
  let orignProto = Object.getPrototypeOf(origin)
  return Object.assign(Object.create(orignProto), origin)
}
const merge = (target, ...source) => Object.assign(target, ...source)

const Defaults = {
  logLevel: 0,
  outputFormat: 'html'
}
function processContent(options) {
  options = Object.assign({}, Defaults, options)
  console.log(options)
}
processContent({ logLevel: 33 })

const obj4 = {
  foo: 123,
  get bar() {
    return 'abc'
  }
}
console.log(Object.getOwnPropertyDescriptors(obj4))

function getOwnPropertyDescriptors(obj){
  const result  ={}
  for(let key of Reflect.ownKeys(obj)){
    result[key] = Object.getOwnPropertyDescriptor(obj)
  }
  return result
}
const source3 = {
  set foo(value) {
    console.log(value);
  }
};

const target3= {};
Object.assign(target1, source3);
console.log(Object.getOwnPropertyDescriptor(target3, 'foo'))

const source5 = {
  set foo(value) {
    console.log(value);
  }
};

const target5 = {};
Object.defineProperties(target5, Object.getOwnPropertyDescriptors(source5));
console.log(Object.getOwnPropertyDescriptor(target5, 'foo'))

const shallowMerge = (targe,source) => Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptor(source)
)

const clone = Object.create(Object.getPrototypeOf(obj),
Object.getOwnPropertyDescriptors(obj))
const shallowClone = (obj) => Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
