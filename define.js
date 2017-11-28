function printprops() {
    for (var p in o) console.log(p + ': ' + o[p] + '\n')
  }
  
  function distance(x1, y1, x2, y2) {
    var dx = x2 - x1
    var dy = y2 - y1
    return Math.sqrt(dx * dx + dy * dy)
  }
  console.log(distance(2, 4, 8, 4))
  
  function factorial(x) {
    if (x <= 1) return 1
    return x * factorial(x - 1)
  }
  console.log(factorial(4))
  
  var square = function(x) {
    return x * x
  }
  var f = function fact(x) {
    if (x <= 1) return 1
    else return x * fact(x - 1)
  }
  console.log(f(3))
  
  var tensqured = (function(x) {
    return x * x
  }(10))
  console.log(tensqured)        