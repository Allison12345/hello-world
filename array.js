var students = [
  { name: 'jack', age: 34, tall: 160 },
  { name: 'tom', age: 16, tall: 170 },
  { name: 'cc', age: 13, tall: 174 },
  { name: 'dd', age: 23, tall: 159 },
  { name: 'ff', age: 25, tall: 147 }
]

function mySort(array, key, flag) {
  array.sort(function(a, b) {
    return flag ? a[key] - b[key] : b[key] - a[key]
  })
  return array
}
console.log(mySort(students, 'tall', false))

var s = students.filter(function(x) {
  return x.age < 20
})
var a = s.map(function(x) {
  return x.name
})
console.log(a)
var sum = students.reduce(function(x, y) {
  return x+ y.tall
},0 )
var average = (sum/students.length).toFixed(2)
console.log(average)
