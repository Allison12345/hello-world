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

var dogs = [
  { name: 'aa', heavy: 11, tall: 44 },
  { name: 'bb', heavy: 42, tall: 13 },
  { name: 'cc', heavy: 33, tall: 7 }
]
var max = 0
var index = 0

for (var i = 0; i < dogs.length; i++) {
  if (max < dogs[i].tall) {
    max = dogs[i].tall 
    index = i
  }
}
console.log(dogs[index].name)
