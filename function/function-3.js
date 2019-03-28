var f = new Function('x', 'y', 'return x*y')
var scope = 'global'
function construcFunction() {
  const scope = 'local'
  return new Function("return scope")
}
construcFunction()()