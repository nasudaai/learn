const args = process.argv;

//console.log(args)


const x = args[2];
console.log(x);


const y = args[3];
console.log(y)

const total = parseInt(x) + parseInt(y);
console.log(total);


const z = x / total;
console.log(z)

const parc = z * 100;
console.log(parc)

const fix = parc.toFixed(2);
console.log(fix + "%");
