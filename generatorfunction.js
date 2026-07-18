// function* generator(i){
//     console.log('Generator started');
//     yield 10;
//     console.log('Next value');
//     yield i;
//     console.log('Finished');
//     return 100;
// }

// const gen = generator(20);

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function *makeId(){
    let index = 1;
    while (true) {
        yield index;
        index +=1;
    }
}

const idGenerator = makeId();

console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
