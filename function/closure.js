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
console.log('\n---test1---')
function test1() {
  var data = [],
    i = 0
  for (; i < 4; i++) {
    data[i] = function() {
      console.log(i)
    }
  }
  console.log('i:', i)
  return data[3]
}
test1()()
console.log('\n---test2---')
function test2() {
  var data = [],
    i = 0
  for (; i < 4; i++) {
    function fn(x) {
      return function() {
        console.log(x)
      }
    }
    data[i] = fn(i)
  }
  console.log('i:', i)
  return data[3]
}
test2()()
