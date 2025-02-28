console.log('err')

const arg = parseInt(process.argv[2])

console.log(arg)

if ( Number.isNaN(arg) ) {

  console.log('NaN!!!!!!!!!!!!!!')
} else {

  console.log(arg)
}
