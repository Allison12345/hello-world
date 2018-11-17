function printprops(o) {
  for (var p in o) return (p + ':' + o[p] + '\n')
}
function distance(x1, y1, x2, y2) {
  var dx = x2 - x1
  var dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}
function fatorial(x) {
  if (x <= 1) return 1
  return x * fatorial(x - 1)
}
var squre = function(x) {
  return x * x
}
var f = function fact(x) {
  if (x <= 1) return 1
  return x * fact(x - 1)
}

function hypqtenuse(a, b) {
  function squre(x) {
    return x * x
  }
  return Math.sqrt(squre(a) + squre(b))
}
console.log(printprops({x:1}))
var total = distance(0,0,2,1)+ distance(2,1,3,5)
console.log(total)
var probablity = fatorial(13)/fatorial(3)
console.log(probablity)
var calculator = {
    operand1 : 1,
    operand2 : 2,
    add : function(){
        this.result = this.operand1 +this.operand2
}
}
console.log(calculator.add(1,1))
var o = {
    m:function(){
        var self = this
        console.log(this === o)
        f()
        function f(){
            console.log(this === o)
            console.log(self === o)

        }
    }
}
console.log(o.m())
var p = [1,2,3,4,5]
function getPropertynames(o,/*optional*/a){
    if(a === undefined) a =[]
    for(property in o) a.push(property)
    return a
}
var a = getPropertynames(o)
console.log(getPropertynames(p,a))