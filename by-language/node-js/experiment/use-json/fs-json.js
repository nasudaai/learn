const fs = require("fs")

const data = JSON.parse(fs.readFileSync("./data.json", "utf8"))


for (const key in data) {
  console.log(key, data[key])
}
