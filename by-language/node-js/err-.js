const args = process.argv

function argsLog() {
  const arg = args[2]
  if (arg != parseInt(arg)) {
    throw new Error(`${arg} is not number`)
  }
  console.log(arg)
}


try {
  console.log('try ')

  argsLog()
} catch (error) {
  console.log('catch error')

  console.log(error.message)
} finally {
  
  console.log('filally')
}
