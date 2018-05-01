class People {
  constructor(abc) {
    console.log('contructor', abc)
    this.name = abc
  }
  getName() {
    return this.name
  }
}
class Student extends People {
  constructor(name, score) {
    super(name)
    this.score = score
  }
  getName() {
    return this.name + this.score
  }
}
const stu1 = new Student('xiaoguai', 'cute')
console.log(stu1.getName())
const stu2 = new Student('hemu', 'ugly')
console.log(stu2.getName())
const peo = new Student('hehe', '23')
console.log(peo.getName())
