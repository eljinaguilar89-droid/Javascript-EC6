const notANumber = Number('test');

console.log(notANumber)

console.log(Number.isNaN(notANumber))
console.log(Number.isFinite(Infinity))

console.log(Math.trunc(-42.799))
console.log(Math.floor(-42.799))
console.log(Math.sign(-42.799))