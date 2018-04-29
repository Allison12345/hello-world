var point = document.getElementById('canvas')
var context = point.getContext('2d')
context.strokeStyle = 'green'
context.beginPath()
var start = false
point.onmousedown = function(event) {
  context.moveTo(event.x, event.y)
  start = true
}
point.onmousemove = function(event) {
  if (start) {
    context.lineTo(event.x, event.y)
    context.stroke()
  }
}
point.onmouseup = function(event) {
  if (start = false) {
    context.lineTo(event.x, event.y)
  }
}
