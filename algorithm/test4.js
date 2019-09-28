function twoSum(nums, target) {
  var item = new Array()
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      var result = nums[i] + nums[j]
      if (result === target) {
        item.push(i, j)
        return item
      }
    }
  }
}
const nums = [2, 3, 5, 2, 5, 6]

console.log(twoSum(nums, 7))
var twoSum = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] == target) return [i, j]
    }
  }
}
function twoSum2(nums, target) {
  var map = new Map()
  var arr = new Array()
  for (let i in nums) {
    map.set(nums[i], i)
  }
  for (let j = 0; j < nums.length - 1; j++) {
    if (map.has(target - nums[j]) && map.get(target - nums[j]) != j) {
      arr.push(j, map.get(target - nums[j]))
      return arr
    }
  }
}
console.log(twoSum2(nums, 8))

function twoSum3(nums, target, i = 0, maps = {}) {
  let map = maps
  if (map[target - nums[i]] >= 0) {
    return [map[target - nums[i]], i]
  } else {
    map[nums[i]] = i
    i++
    if (i < nums.length - 1) {
      return twoSum3(nums, target, i, map)
    } else throw 'kjs'
  }
}
console.log(twoSum3(nums, 8))
