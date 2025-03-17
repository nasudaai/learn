function asyncTask() {
  return Math.random() > 0.5
    ? Promise.resolve("sucsess")
    : Promise.reject(new Error("err"));
}


const val = await asyncTask()
console.log(val)

