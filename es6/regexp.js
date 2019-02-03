var regexp = new RegExp(/abc/gi, 'i').flags
console.log(regexp)

const a = /^\uD83D/u.test('\uD83D\uDC2A')

console.log(a)

var s = '𠮷'
console.log(/^.$/.test(s))
const b = /^.$/u.test(s)
console.log(b)

const r = /\u{61}/u.test('a')
const t = /\u{20BB7}/u.test('𠮷')

function codePointLength(text) {
  var result = text.match(/[\s\S]/gu)
  return result ? result.length : 0
}
var y = '吉吉'
console.log(codePointLength(y))
console.log(/[a-z]/iu.test('\u2012A'))

const r1 = /hello/
const r2 = /hello/u
console.log(r2.unicode)

var i = 'aaaa_aa_a'
var o1 = /a+/g
var o2 = /a+/y
console.log(o1.exec(i))
console.log(o2.exec(i))
console.log(o1.exec(i))
console.log(o2.exec(i))

var o11 = /a+_/g
var o22 = /a+_/y
console.log(o11.exec(i))
console.log(o22.exec(i))
console.log(o11.exec(i))
console.log(o22.exec(i))

const REGEX = /a/gy;
console.log('aaxa'.replace(REGEX, '-') )

console.log('a1a2a3'.match(/a\d/y) )
console.log('a1a2a3'.match(/a\d/gy))