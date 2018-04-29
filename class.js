class Student {
  constructor(abc) {
    console.log('contructor',abc)
    this.name = abc
  }
  getName(){
      return this.name
  }
}
const stu1 = new Student('xiaoguai')
console.log(stu1.getName())
const stu2 = new Student('hemu')
console.log(stu2.getName())