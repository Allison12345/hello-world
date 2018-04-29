var point = document.getElementById("canvas")
point.onclick = function(event){
      var context = point.getContext("2d")
      context.strokeStyle = "green"
      context.beginPath()
      context.moveTo(0,0)
      context.lineTo(event.x,event.y)
      context.stroke()
}