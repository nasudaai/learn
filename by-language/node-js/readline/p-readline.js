const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process')


async function rl() {
  const rl = readline.createInterface({ input, output })
  const answer = await rl.question('pleas string\n')
  
  rl.close()

  console.log(answer)
}

rl()


