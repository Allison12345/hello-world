var persons = [
  { name: 'a', height: 120 },
  { name: 'b', height: 130 },
  { name: 'c', height: 140 }
]
console.log(persons[0].name)
var max = 0
var index = 0
for (var i = 0; i < persons.length; i++) {
  if (max < persons[i].height) {
    max = persons[i].height
    index = i
  }
}
console.log(persons[index].name)
