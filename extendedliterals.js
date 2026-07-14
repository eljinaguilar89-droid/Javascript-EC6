console.log(Number(404).toString(2))
console.log(0b110010100 === 404)
console.log(0o1234 === 668)

console.log('😀'.length)
console.log('😁'.codePointAt(0))
console.log('😁'.codePointAt(1))

const smileyCode = Number('😁'.codePointAt(0)).toString(16);
console.log(smileyCode)
console.log(`\u{1f601}`)