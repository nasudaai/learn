const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function readLine() {
  rl.question("please yes", (str) => {
    if (str === "yes") {
      console.log("thank you")

    } else {
      console.log("no thank you")
      return str
    }
    rl.close()
  })
}

function main() {
  const ans = readLine()
  console.log(ans)
  readLine()
  
}

main()
