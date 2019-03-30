function compose(f, g) {
  return function() {
    return f.call(this, g.apply(this, arguments))
    // f = f.bind(this)
    // g = g.bind(this)
    // return f(g(msg))
  }
}

function printName(msg) {
  console.log(this.name, msg)
  return `printName->${msg}`
}

function printAge(msg1, msg2) {
  console.log(this.age)
  return `printAge->${msg1},${msg2}`
}

const print = compose(
  printName,
  printAge
)

const stu1 = {
  name: 'A',
  age: 18,
  print
}

const stu2 = {
  name: 'B',
  age: 20,
  print
}

const result1 = stu1.print('stuA1', 'stuA2')
console.log(result1)
// stu2.print()