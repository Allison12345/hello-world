var a = [1, 2, 3, 4, 5]
console.log(a.reverse().join('-'))
var a = new Array('banana', 'cherry', 'apple')
console.log(a.sort().join('&'))

var a = [33, 4, 111, 222]
a.sort(function(a, b) {
  return a - b
})
console.log(a)
var a = ['ant', 'Bug', 'cat', 'Dog']
a.sort(function(s, t) {
  var a = s.toLowerCase()
  var b = s.toLowerCase()
  if (a > b) return 1
  if (a < b) return -1
})
console.log(a)
console.log(a.concat('Rabbit'))
var b = [1, 2, 3, 4, 5, 4, 6, 7, 8]
b.splice(2, 4, 'tom', 'ary')
console.log(b)
var stack = []
stack.push(2, 4)
stack.pop()
console.log(stack)
var c = []
c.unshift(33, 45)
c.unshift(12)
c.shift()
console.log(c)
var data = [1, 2, 3, 4, 5]
var sum = 0
data.forEach(function(x) {
  sum += x
})
data.forEach(function(v, i, a) {
  a[i] = v + 1
})
console.log(data)
var a = [12, 3, 455, 6]
b = a.map(function(x) {
  return x * x
})
console.log(b)
var a = [5, 4, , 3, 2, 1]
smallvalues = a.filter(function(x) {
  return x < 3
})
everyyother = a.filter(function(x) {
  return x % 2 !== 0
})
console.log(everyyother)
var dense = a.filter(function() {
  return true
})
a = a.filter(function(x) {
  return x !== undefined && x !== null
})
var a = [1, 2, 3, 4, 5]
s = a.every(function(x) {
  return x < 10
})
console.log(s)
a.every(function(x) {
  return x % 2 === 0
})
a = [1,2,3,4,5]
a.some(function(x){
    return x%2 === 0
})
console.log(isNaN)
var a = [1,2,35,3,6,7]
var sum = a.reduce(function(x,y){return x +y},0)
var product = a.reduce(function(x,y){return x*y},1)
var max = a.reduce(function(x,y){return x>y?x:y})
console.log(max)
var a = [1,2,3,4]
var big = a.reduceRight(function(x,y){
    return Math.pow(x,y)
})
console.log(big)