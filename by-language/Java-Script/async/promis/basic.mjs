function delay(timeoutMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeoutMs)
  })
}

const r = delay(10)

console.log(r)

const r2 = await delay(100)
console.log(r2)


delay(1000).then(() => {
  console.log("delay")
})
