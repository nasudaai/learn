
const obj = {
  a: "A",
  b: "B",
  c: "C",
}

for (const prop in obj ) {
  console.log(`${prop}: ${obj[prop]}`)
}
