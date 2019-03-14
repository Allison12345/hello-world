uniqueInteger.counter = 0
function uniqueInteger() {
  return uniqueInteger.counter++
}
uniqueInteger()
uniqueInteger()
console.log(uniqueInteger.counter)

function factorial1(n) {
  if (isFinite(n) && n > 0 && n == Math.round(n)) {
    if (!(n in factorial1)) factorial1[n] = n * factorial1(n - 1) 
    return factorial1[n]
  } else return NaN
}
factorial1[1] = 1
console.log(factorial1(4))
