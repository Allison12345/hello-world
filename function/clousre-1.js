function counter1(n) {
  return {
    get count() {
      return n++
    },
    set count(m) {
      if (m >= n) n = m
      else throw Error('')
    }
  }
}
const e = counter1(1000)
console.log(e.count)

function addPrivatePropery(o, Name, predicate) {
  var value
  o['get' + Name] = function() {
    return value
  }
  o['set' + Name] = function(v) {
    if (predicate && !predicate(v)) throw Error('fgsssd')
    else value = v
  }
}
var o = {}
addPrivatePropery(o, 'Name', function(x) {
  return typeof x === 'string'
})
o.setName('frank')
console.log(o.getName())
