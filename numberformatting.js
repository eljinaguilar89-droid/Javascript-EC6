const formatter = new Intl.NumberFormat('de-DE', {style: 'decimal'});

const number = 12345678.90

console.log(number)
console.log(formatter.format(number))