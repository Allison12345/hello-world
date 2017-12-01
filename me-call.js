var calculator = {
  operand1: 1,
  operand2: 1,
  add: function() {
    this.result = this.operand1 + this.operand2
  }
}
console.log(calculator.add())

var o = {
    m:function(){
        var self = this
        if(this === o) 
        f()
        function f(){
            console.log(this === o)
            console.log(self === o)
        }
    }
}
console.log(o.m())