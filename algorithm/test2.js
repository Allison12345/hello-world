function removeRepeat(str) {
  var hash = {}
  var data = []
  for (var i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = true
      data.push(str[i])
    }
  }
  return data
}
console.log(removeRepeat('aabbccjkkss'))

function removeRepeat1(arr) {
  return Array.from(new Set(arr))
}
console.log(removeRepeat1('aabbccjkkss'))

const a = new Set([12, 13, 3, 4, 5])
const b = new Set([1, 4, 5, 2, 3, 5, 65])
const union = new Set([...a, ...b])
const intersect = new Set([...a].filter(x => b.has(x)))
const difference = new Set([...b].filter(x => !a.has(x)))
console.log(difference)
