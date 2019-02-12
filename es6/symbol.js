let s = Symbol()
console.log(typeof s)

let s1 = Symbol('foo')
let s2 = Symbol('baz')
console.log(s1)

const obj = {
  toSting(){
    return 'abc'
  }
}
const sym = Symbol(obj.toSting())
console.log(sym)

let s11 = Symbol('foo')
let s22 = Symbol('foo')
console.log(s11 ===s22)

let sym2 = Symbol('My symbol')
console.log(String(sym2))
let sym3 = Symbol()
console.log(Boolean(sym3))
console.log(!sym3)

let mySymbol = Symbol()
let a = {}
a[mySymbol] = 'hello'
let a1 = {
  [mySymbol]:'hello'
}
let a2 = {}
Object.defineProperty(a ,mySymbol,{value:'hello'})

const mySymbol1 = Symbol()
const a3 = {}
a3.mySymbol = 'hello'
console.log(a3['mySymbol'])

let s3 = Symbol()
let obj1 = {
  [s3]:function(arg){return arg}
} 
console.log(obj1[s3](123))

const log = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');

const COLOR_RED = Symbol()
const COLOR_GREEN = Symbol()

function getComplement(color){
  switch(color){
    case COLOR_RED:
    return COLOR_GREEN
    case COLOR_GREEN:
    return COLOR_RED
    default: 
    throw new Error('undefined color')
  }
}
getComplement(COLOR_GREEN)

function getArea(shape,options){
  let area = 0
  switch(shape){
    case "Triangle":
    area = .5*options.wisth*options.height
    break
  }
  return area
}
getArea("Triangle",{width:100,height:100})

const shapeType ={
  Triangle :Symbol()
}
function getArea1(shape,options){
  let area = 0
  switch(shape){
    case shapeType.Triangle:
    area = .5*options.width*options.height
    break
  }
   return console.log(area)
}
getArea1(shapeType.Triangle,{width:100,height:100})