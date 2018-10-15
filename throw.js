function factorial(x) {
  if (x < 0) throw new Error('x不能是负数')
  if (x > 1)  (x = x * factorial(x-1))
  return x
}
console.log(factorial(-2))

try{
    var n = Number(prompt("请输入一个正数"))
    var f = factorial(n)
    alert9(n = "!=" + f)
}
catch(e){
    alert(e)
}
