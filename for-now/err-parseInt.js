console.log('err')

const arg = parseInt(process.argv[2])

console.log(arg)

if ( "number"  === typeof arg) {
  console.log(arg)
} else {
  console.log('NaN!!!!!!!!!!!!!!')
}
