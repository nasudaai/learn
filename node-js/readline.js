const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Please word\n>>> ', function(word) {
  console.log(`Thank you ${word}`)

  rl.close()
})
