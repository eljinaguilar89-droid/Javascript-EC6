const fizzBuzz = {

    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                i+= 1;
                return{ done: i>= 100, value: i % 15 === 0 ? 
                    'FizzBuzz' : i % 5 === 0 ? 'Buzz' : i % 3 === 0 ? 'Fizz' : i }

            }
        }
    }
}

for (let n of fizzBuzz) {
    console.log(n);
}
