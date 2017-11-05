function add(x) {
  return function(y) {
    return x + y
  }
}
var add10 = add(10)
console.log(add10(5))

console.log(add(8)(1))
function times(x) {
  function temp(y) {
    return x * y
  }
  return temp
}
console.log(times(8)(4))