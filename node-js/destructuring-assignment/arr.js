let a, b, rest; 

[a, b] = [1, 2];
console.log(a, b);

[a, b, ...rest] = [{name: "a"}, {name: "b"}, {name: "c"}, {name: "d"}, {name: "e"}]


console.log(a)
console.log(b)
console.log(rest)


rest.forEach((name) => {
  
  console.log(name.name)
})

function returnForEach(arr) {
  arr.map((obj) => {
    const name = obj.name
    return name
  })
}

let names = []
console.log(names)
names = returnForEach(rest)

console.log(names)

const namesType = typeof names
console.log(namesType)
console.log(rest)
