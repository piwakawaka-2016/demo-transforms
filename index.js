const spark = require('sparkly')


const arr = [1, 2, 13, 2, 0, 4, 7, 7, 8]

const newArr = arr.map(x => x*3)

console.log('here is a graph', spark(newArr))
console.log('here is the datas', newArr)

