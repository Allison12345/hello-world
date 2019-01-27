let [, , third] = ['foo', 'bar', 'baz']
let [q, , w] = [1, 2, 3]
let [head, ...tail] = [1, 2, 3, 4, 5]
let [x, y, ...z] = ['a', , 234.3, 2, 4, 5]

let [e, r] = [1, 2, 3]
let [a, [b, t], d] = [1, [2, 3], 4]
let [i, o, u] = new Set(['a', 'b', 'c'])

let [foo = true] = []
//默认值
let [g, s = '1'] = ['a']
let [h, f = '1'] = ['a', undefined]

let { foe: baz } = { foe: 'aaa', bar: 'bbb' }
let obj = { p: ['hello', { z: 'world' }] }
let {
  p,p: [c, { v }]
} = obj
console.log(p)
