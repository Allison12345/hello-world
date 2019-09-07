function Set() {
  this.values = {}
  this.n = 0
  this.add.apply(this, arguments)
}
Set.v2s = function(val) {
  switch (val) {
    case undefined:
      return 'u'
    case null:
      return 'n'
    case true:
      return 't'
    case false:
      return 'f'
    default:
      switch (typeof val) {
        case 'number':
          return '#' + val
        case 'string':
          return '' + val
        default:
          return '@' + objectid(val)
      }
  }
}
function objectid(o) {
  var id = '[**objectid**]'
  if (!o.hasOwnProperty(id)) {
    o[id] = Set.v2s.next++
  }

  return o[id]
}
Set.prototype.add = function() {
  for (var i = 0; i < arguments.length; i++) {
    var val = arguments[i]
    var str = Set.v2s(val)
    if (!this.values.hasOwnProperty(str)) {
      this.values[str] = val
      this.n++
    }
  }
  return this
}
Set.prototype.remove = function() {
  for (var i = 0; i < arguments.length; i++) {
    var str = Set.v2s(arguments[i])
    if (this.values.hasOwnProperty(str)) {
      delete this.values(str)
      this.n--
    }
  }
}
Set.prototype.contains = function(value) {
  return this.values.hasOwnProperty(Set.v2s(value))
}
Set.prototype.size = function() {
  console.log(this)
  return this.n
}
Set.prototype.foreach = function(f, context) {
  for (var s in this.values) {
    if (this.values.hasOwnProperty(s)) f.call(context.this.values[s])
  }
}
const set = new Set()
console.log(set.size())
console.log(set.add(1))
console.log(set.contains(1))
console.log(set.values)
