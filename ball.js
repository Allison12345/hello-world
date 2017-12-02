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
function choose() {
    var re = [],
      bl = [],
      ye = []
    for (var times = 0; times < 1200; times++) {
      var random = Math.random() * fin.length
      var index = Math.floor(random)
      var ball = fin[index]
      if (ball.name === 'red') {
        re.push('red')
      }
      if (ball.name === 'blue') {
        bl.push('blue')
      }
      if (ball.name === 'yellow') {
        ye.push('yellow')
      }
    }
    console.log(re.length,bl.length,ye.length)
  }
  console.log(choose())
  