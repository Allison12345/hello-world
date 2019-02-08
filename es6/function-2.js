let insert = value => ({
  into: array => ({
    after: afterValue => {
      array.splice(array.indexOf(afterValue) + 1, 0, value)
      return array
    }
  })
})
console.log(insert(2).into([1,3]).after(1))

const plus1 = a => a + 1;
const mult2 = a => a * 2;

console.log(mult2(plus1(5)))

