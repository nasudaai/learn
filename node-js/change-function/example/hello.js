console.log("hello world!")

function returnHello() {
  return "Hello World!!!!"
}


function hello(fn) {
  const word = fn()
  console.log(word)
}


hello(returnHello)
