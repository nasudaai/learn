const args = process.argv
console.log(args)

const obj = { keyTypes: args[2], typesPerSecond: args[3], miss: args[4]}
const { keyTypes, typesPerSecond, miss } = obj

console.log(obj)

const wpm = typesPerSecond * 60 / 5
const missPercentage = miss / (parseInt(keyTypes) + parseInt(miss)) * 100
const message = "wpm: " + wpm + ".\nmiss:" + missPercentage.toFixed(2) + "%."
console.log(message)
