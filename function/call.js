function trace(o,m){
   const original = o[m]
   o[m] = function (){
     console.log(new Date(),'Entering:' ,m)
     const result = original.apply(this,arguments)
     console.log(new Date(),"exiting:", m)
     return result
   }
}