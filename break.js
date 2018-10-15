var matrxi = [1,2,3,4,5]
var sum = 0,success = false
compute_sum: if(matrxi){
    for(var x= 0;x<matrxi.length;x++){
        var cell = matrxi[x]
        if(!cell) break compute_sum
        for(y=0;y<cell.length;y++){
            var row = cell[y]
            if(isNaN(row)) break compute_sum
            sum += row
        }
        success = true
    }
    return sum
}

console.log(matrxi)