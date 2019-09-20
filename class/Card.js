function inherit(p) {
  if (p == null) throw TypeError()
  if (Object.creat) {
    return object.creat(p)
  }
  var t = typeof p
  if (t !== 'function' && t !== 'object') throw TypeError()
  function f() {}
  f.prototype = p
  return new f()
}
function enumeration(namestoValues) {
  var enumeration = function() {
    throw 'can not'
  }
  var proto = (enumeration.prototype = {
    constructor: enumeration,
    toString: function() {
      return this.name
    },
    valueOf: function() {
      return this.value
    },
    toJson: function() {
      return this.name
    }
  })
  enumeration.values = []
  for (name in namestoValues) {
    var e = inherit(proto)
    e.name = name
    e.value = namestoValues[name]
    enumeration[name] = e
    enumeration.values.push(e)
  }
  enumeration.foreach = function(f, c) {
    for (var i = 0; i < this.values.length; i++) f.call(c, this.values[i])
  }
  return enumeration
}

function Card(suit, rank) {
  this.suit = suit
  this.rank = rank
}
Card.Suit = enumeration({ Clubs: 1, Diamonds: 2, Hearts: 3, Spades: 4 })
Card.Rank = enumeration({
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Quen: 12,
  King: 13,
  Ace: 14
})
Card.prototype.toString = function() {
  return this.rank.toString() + 'Of' + this.suit.toString()
}
Card.prototype.compareTo = function(that) {
  if (this.rank < that.rank) return -1
  if (this.rank > that.rank) return 1
  return 0
}
Card.orderBySuit = function(a, b) {
  return a.compareTo(b)
}
Card.orderBySuit = function(a, b) {
  if (a.suit < b.suit) return -1
  if (a.suit > b.suit) return 1
  if (a.rank < b.rank) return -1
  if (a.rank > b.rank) return 1
  return 0
}
function Deck() {
  var cards = (this.cards = [])
  Card.Suit.foreach(function(s) {
    Card.Rank.foreach(function(r) {
      cards.push(new Card(s, r))
    })
  })
}
Deck.prototype.shuffle = function() {
  var deck = this.cards,
    len = deck.length
  for (var i = len - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1)),
      temp
    ;(temp = deck[i]), (deck[i] = deck[r]), (deck[r] = temp)
  }
  return this
}
Deck.prototype.deal = function(n) {
  if (this.cards.length < n) throw 'out of cards'
  return this.cards.splice(this.cards.length - n, n)
}
var deck = new Deck().shuffle()
var hand = deck.deal(13).sort(Card.orderBySuit)
console.log(deck)
console.log(hand)
