const { stdin: input, stdout: output } = require('node:process')
console.log(input, output)

const o = { inp: "input", out: "output" }
const { inp: i, out: op } = o
console.log(i, op)

console.log("main")

function main() {
  console.log("func")
}

main()
