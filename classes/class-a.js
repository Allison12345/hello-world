function classof(o){
    if(o === null) return "null"
    if(0 === undefined) return "undefined"
    return Object.prototype.toString.call(o).slice(8,-1)
}
console.log(classof(true))