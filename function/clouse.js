function fun(n, o) {
  console.log(o)
  return {
    fun: function(m) {
      return fun(m, n)
    }
  }
}
var a = fun(0)
  .fun(1)
  .fun(2)
  .fun(3)
  .fun(4)
console.log(a)
