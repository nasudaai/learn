const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


rl.question('Please word\n>>> ', function fn(word) {

  if (word === "ok") {

    console.log(`Thank you ${word}`)
  } else {
    console.log("one more")
  }

  rl.close()

})
