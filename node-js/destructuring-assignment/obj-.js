const obj = {a: 1, b: 2}

const { a, b } = obj

console.log(a, b)


const numbers = []
const nobj = {a: 3, b: 4};

({a: numbers[0], b: numbers[1]} = nobj)

console.log(numbers)

const {a: numZero} = nobj
console.log("numzero:", numZero)
