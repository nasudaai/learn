const arg = process.argv[2]
console.log(arg)

function rWord(arg) {
  return arg
}

const a = rWord(arg)
console.log(a)

function use(fn, arg) {
  const a = rWord(arg)
  console.log(a)
}

use(rWord, arg)
