var color = ['red', 'blue', 'yellow']
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var fin = []

function createbox() {
  
  for (var i = 0; i < color.length; i++) {
    for (var j = 0; j < number.length; j++) {
        var as ={ name: 'i', id: 'j' }
        as.name = color[i]
      as.id = number[j]
      fin.push(as)
    }
  }
  return fin
}
console.log(createbox())
