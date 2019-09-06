const myMap = Array.prototype.map
  ? function(a, f) {
      return a.map(f)
    }
  : function(a, f) {
      const results = []
      for (var i = 0; i < a.length; i++) {
        if (i in a) results[i] = f.call(null, a[i], i, a)
      }
      return results
    }
