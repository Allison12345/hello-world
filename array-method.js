var a = [1,2,3,4,5]
console.log(a.reverse().join("-"))
var a = new Array("banana","cherry","apple")
console.log(a.sort().join("&"))

var a = [33,4,111,222]
a.sort(function(a,b){
    return a-b
})
console.log(a)
var a = ['ant','Bug','cat','Dog']
a.sort(
    function(s,t){
        var a = s.toLowerCase()
        var b = s.toLowerCase()
        if(a>b)return 1
        if(a<b)return -1
    }
)
console.log(a)
console.log(a.concat("Rabbit"))
var b = [1,2,3,4,5,4,6,7,8]
b.splice(2,4,"tom","ary")
console.log(b)
var stack = []
stack.push(2,4)
stack.pop()
console.log(stack)
var c = []
c.unshift(33,45)
c.unshift(12)
c.shift()
console.log(c)
