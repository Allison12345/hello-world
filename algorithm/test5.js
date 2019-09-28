function reverse(x) {
  let fh = '',
    re
  if (x < 0) {
    ;(fh = '-'), (re = -x)
  }
  re = (Math.abs(x) + '')
    .split('')
    .reverse()
    .join('')
  if (
    re.length > 10 ||
    (re.length === 10 && (x < '-2147483648' && x > '2147483647'))
  ) {
    return 0
  } else {
    return fh + re
  }
}
console.log(reverse(-2147483412))
