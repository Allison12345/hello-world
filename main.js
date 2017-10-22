var iceCream = "chocolate";
if (iceCream === "chocolate") {
  console.log("Yay,I love chocolate ice cream!");
} else {
  console.log("Awwww,but chocolate is my favorite...");
}
let fruits = ["apple", "banana"];
console.log(fruits.length);
let first = fruits[0];
let last = fruits[fruits.length - 1];
console.log(fruits);
fruits.forEach(function(a, b, c) {
  console.log(a, b);
});
var newlength = fruits.push("orange");
console.log(fruits);
var newlength = fruits.pop();
console.log(fruits);
var newlength = fruits.unshift("apple");
var newleagth = fruits.push("mango");
console.log(fruits);
var newleagth = fruits.shift();
console.log(fruits);
let item = fruits.indexOf("apple");
console.log(item);
var pos = fruits.indexOf("banana");
var removeditem = fruits.splice(pos, 1);
console.log(fruits);
var vegelables = ["cabbage", "turnip", "radish", "carrot"];
console.log(vegelables);
var pos = 1,
  n = 2;
var removeditem = vegelables.splice(pos, n);
console.log(vegelables);
console.log(removeditem);
var shallowcopy = fruits.slice();
console.log(fruits);
var q = ["w", "e"];
console.log(q[0]);
console.log(q[1]);
console.log(q[q.length - 1]);
