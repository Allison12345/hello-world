function getPropertyNames(o, /* optional */ a) {
    if (o === undefined) {
      a = []
    }
    for (var property in o) {
      a.push(proprty)
    }
    return a
  }
  var a = getPropertyNames(o)
  console.log(getPropertyNames(p, a))
  