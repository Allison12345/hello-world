var tall = [120, 130, 140, 133, 170, 180, 145, 122]
var max = 0

for (var i = 0; i < tall.length; i++) {
  if (max < tall[i]) {
    max = tall[i]
  }
}
console.log(max)
