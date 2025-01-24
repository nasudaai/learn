const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('yen typePerSecond miss cource types \n>>> ', function(yen) {
  console.log(`Thank you `)

  const arr1 = yen

  console.log(arr1)

  rl.close()
})

