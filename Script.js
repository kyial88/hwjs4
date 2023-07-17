// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']
// let array =['lorem', 'ipsum', 'dolor']
// console.log(array.map((el,   idx) => idx === 2
//     ? el[0].toUpperCase()+el.slice(1): el ))

// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
// let array = ['lorem', 'ipsum', 'dolor']
// let el = 0
// console.log(array.map((el,   idx) => idx < array.length ? el[0].toUpperCase()+el.slice(0): el ))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'

let array = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
console.log(array.map(el =>el.trim()).join("-"))



