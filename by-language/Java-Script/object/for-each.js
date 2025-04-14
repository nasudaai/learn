const arrLikeObject = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
}

Array.prototype.forEach.call(arrLikeObject, (x) => console.log(x))
