function check(args){
  var actual = args.length
  var expect = args.callee.length
  if(actual !== expect)
    throw Error ('')
}
function f(x,y,z){
  check(arguments)
  return x+y+z
}