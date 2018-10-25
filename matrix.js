var table = new Array(10)
for (var i = 0; i < table.length; i++) table[i] = new Array(10)
for (var row = 0; row < table.length; row++) {
  for (var col = 0; col < table[row].length; col++) {
    table[row][col] = row * col
  }
}
console.log(table[4][6])