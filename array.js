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
console.log(mySort(students, 'tall',false))
