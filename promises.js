// const p = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('Done')
//     }, 2000);
    
// });


// p
//  .then(result => console.log('Resolved',result))
//  .catch(error => console.log('Rejected', error));


const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        const random = Math.random() * 2000;
        setTimeout(() => {
            if (random > 500) {
                reject(random);
            }
            resolve(random);
        }, random)
    });
}


// asyncFunction()
//     .then(result => {
//         console.log('Logged first');
//         console.log('The value was:', result);
//     })
//     .catch(error => {
//         console.log(`${error} is larger than 500`);
//     })

Promise.all([asyncFunction(), asyncFunction(), asyncFunction()])
    .then(data => {
        console.log(data);
    })
    .catch (error => {
        console.log('Error',error);
    })