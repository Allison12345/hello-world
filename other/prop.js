//var o = [],p = [3,4,5,6,7,8,9]
function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop]
  }
  return o
}
function merge(o, p) {
  for (prop in p) {
    if (o.hasOwnProperty[prop]) continue
    o[prop] = p[prop]
  }
  return o
}
function restrict(o, p) {
  for (prop in o) {
    if (!(prop in p)) delete o[prop]
  }
  return o
}
function subtract(o, p) {
  if (prop in p) {
    delete o[prop]
  }
  return o
}
function union(o, p) {
  return extend(extend({}, o), p)
}
function intersection(o, p) {
  return restrict(extend({}, o), p)
}
function keys(o) {
  if (typeof o !== 'object') throw TypeError()
  var result = []
  for (prop in o) {
    if (o.hasOwnProperty(prop)) result.push(prop)
  }
  return result
}
