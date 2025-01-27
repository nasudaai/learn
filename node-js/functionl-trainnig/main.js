function rWord() {
  return "aaa"
}

const a = rWord()
console.log(a)


function use(callback) {
  const a2 = callback()
  console.log(a2)
}


use(rWord)
