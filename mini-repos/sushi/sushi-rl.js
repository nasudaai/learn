const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('yen typePerSecond miss cource types \n>>> ', function(data) {
  console.log(`Thank you `)

  const arr = data.replace(/\s+/g, ",")
  const arr1 = []
  
  arr1.push(data)

  
  console.log(arr)
  console.log(arr1)

  rl.close()
})

