/*
delete object.propetry
delete object['propetry']
*/

var Employee = {
  age: 11,
  name: 4,
  tall: 111
}
console.log(delete Employee.name)
console.log(Employee)

adminname = 'xyz'
var empcount = 22
employeedetails = {
  name: 'xyz',
  age: 5,
  designation: 'developer'
}
console.log(delete adminname)
console.log(delete employeedetails)

function Foo() {
  this.bar = 44
}
Foo.prototype.bar = 43
var foo = new Foo()
console.log(delete foo.bar)
console.log(foo.bar)

var trees = ['a', 'b', 'c', 'd']
trees[3] = undefined
if (3 in trees) {
  console.log(delete trees[3])
}
console.log(trees)
