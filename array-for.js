var a = [1, 2, 3, 4, , , 9]
for (var i = 0; i < a.length; i++) {
  if (!a[i]) continue
}
for (var i= 0;i< a.length;i++){
    if(a[i] === undefined)continue
}
for(var i=0;i<a.length;i++){
    if(!(i in a))continue
}
for(i in a){
    var value = a[i]
}
for(i in a){
    if(!a.hasOwnProperty(i))continue
}
for(i in a){
    if(String(Math.floor(Math.abs(Number(i)))) !== i)continue
}
var data = [1,2,3,45,6]
var sumOfSqure = 0
data.forEach(
    function(x){
        return sumOfSqure += x*x
    }
)
console.log(sumOfSqure)