function findMaxChar(str) {
  if (str.length === 1) {
    return str
  }
  var obj = {}
  for (var i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else {
      obj[str[i]] += 1
    }
  }
  var maxTimesStr = ''
  var maxValue = 0
  for (k in obj) {
    if (obj[k] >= maxValue) {
      maxTimesStr = k
      maxValue = obj[k]
    }
  }
  return maxTimesStr
}
console.log(findMaxChar('jgfhgxdddhvn'))

function swap(a, b) {
  b = b - a
  a = a + b
  b = a - b
  return [a, b]
}
console.log(swap(0, 5))

function getMax(arr) {
  var min = arr[0],
    max = 0
  for (var i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i])
    max = Math.max(max, arr[i])
  }
  return max - min
}
console.log(getMax([1, 2, 3, 4, 5]))

function randomStr(n) {
  var str = 'abcdefghijklmnopqrstuvwxyz9876543210'
  var temp = ''
  var len = str.length
  for (var i = 0; i < n; ++i) {
    temp += str.charAt(Math.floor(Math.random() * len))
  }
  return temp
}
console.log(randomStr(8999))
