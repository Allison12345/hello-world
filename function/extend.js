function Person() {
  this.setName = function(name) {
    this.name = name
  }
  this.sayHi= function() {
    console.log(`my name is ${this.name}`)
    return this.name
  }
}

const personA = new Person()
personA.setName('A')
personA.sayHi()

function Student(score) {
  this.score = score
  this.printScore = function() {
    console.log(`${this.sayHi()}'s score is ${this.score}`)
  }
}

Student.prototype = new Person()

const stu1 = new Student(1)
stu1.setName('student1')
stu1.printScore()

const stu2 = new Student(100)
stu2.setName('stuent2')
stu2.printScore()

function GirlStudent() {
  this.sex = 'girl'
}

GirlStudent.prototype = new Student(100)
const girl = new GirlStudent()
girl.setName('Aijiao')
girl.printScore()
girl.sayHi()