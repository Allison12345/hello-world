function palindromeString(str) {
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  )
}
console.log(palindromeString('ab'))

const order = { tomato: 1 }
function wifeOrder(x) {
  for (key in x) {
    if (x[key] !== 0) return `${key}:${x[key]}`
  }
}
console.log(wifeOrder(order))
function game(guess, answer) {
  let n = 0
  for (var i = 0; i < 3; i++) {
    if (guess[i] === answer[i]) {
      n++
    }
  }
  return n
}
var guess = [1, 4, 2]
var answer = [3, 8, 2]
console.log(game(guess, answer))

var transpose = function(A) {
  let B = []
  for (var i = 0; i < A[0].length; i++) {
    tem = []
    for (var j = 0; j < A.length; j++) {
      tem.push(A[j][i])
    }
    B.push(tem)
  }
  return B
}
const transposeA = [
  [1, 2, 3],
  [4, 5, 6],
  [5, 8, 6]
]

console.log(transpose(transposeA))

var longestOnes = function(A, K) {
  let left = K
  let j = 0
  let i = 0
  let res = 0
  let tem = []
  while (j < A.length) {
    if (A[j] === 0) {
      if (left === 0) {
        if (A[i] === 0) {
          left++
        }
        i++
      } else {
        left--
        j++
      }
    } else {
      j++
    }
    res = Math.max(res, j - i)
  }
  return res, tem
}
const longestOnesA = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  K = 3
console.log(longestOnes(longestOnesA, K))
console.log(longestOnesA.length)

var numJewelsInStones = function(J, S) {
  let [Jrr, Srr] = [J.split(''), S.split('')]
  //Jrr.indexOf(i) !== -1
  return Srr.filter(i => Jrr.indexOf(i) !== -1).length
}
const J = 'aA',
  S = 'aAAbbbb'
console.log(numJewelsInStones(J, S))

var suggestedProducts = function(products, searchWord) {
  let result = []
  for (var i = 0; i < searchWord.length; i++) {
    let tem = []
    let str = searchWord.slice(0, i + 1)
    for (var j = 0; j < products.length; j++) {
      if (str != '' && products[j].indexOf(str) == 0) tem.push(products[j])
    }
    tem.sort()
    result.push(tem.slice(0, 3))
  }
  return result
}
const products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
  searchWord = 'mouseI'
console.log(suggestedProducts(products, searchWord))

var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
}
function createLinkList(list) {
  for (var i = 0; i < list.length; i++) {
    list[i]
  }
}
const head = [4, 5, 1, 9],
  node = (5)[(4, 1, 9)]
console.log(node)
