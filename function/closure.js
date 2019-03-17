var test = (function() {
  var value = 0
  return function() {
    return value++
  }
})()
for (var i = 0; i < 4; i++) {
  test()
}
console.log(test())

function test1() {
  var data = [],
    i
  for (var i = 0; i < 4; i++) {
    data[i] = function() {
      console.log(i)
    }
    return data[0]
  }
}
console.log(test1()())