setTimeout(() => {
  
  try {
    throw new Error("error");
  } catch (error) {
    console.log("catch err")
  }
}, 1000)


console.log("exe")
