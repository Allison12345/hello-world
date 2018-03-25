function hide(e, reflow) {
    if (reflow) {
      e.style.display = 'none'
    } else {
      e.style.visibility = 'hidden'
    }
  }
  function highlight() {
    if (!e.className) {
      e.className = 'hilite'
    } else {
      e.className += 'hilite'
    }
  }