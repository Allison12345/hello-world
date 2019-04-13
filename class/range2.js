function Range(from,to){
this.from = from
this.to = to
}
Range.prototype = {
  includes: function(x){
    return this.from <= x && x <= this.to
  },
  foreach: function(f){
    for(var x = Math.ceil(this.from) ;x <= this.to ;x++) f(x)
  },
  toString: function(){return (this.from + ">>>" + this.to)}
}
var e = Range(1,3)
e.includes(2)
e.foreach(console.log)