var F = function() {}
var p = F.prototype
var c = p.constructor
console.log(c === F)

function typeAndValue(x) {
  if (x === null) return ''
  switch (x.constructor) {
    case Number:
      return 'Number'
    case String:
      return 'String'
    case Date:
      return 'Date'
    case RegExp:
      return 'RegExp'
    case Complex:
      return 'Complex'
  }
}
console.log(typeAndValue('djfh'))
