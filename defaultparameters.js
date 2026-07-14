const sayHi = (greeting, ...names) => {
    names.forEach(name => {
        console.log(greeting + name);
    });
}

const lastName = undefined
sayHi('Hello ', 'James', 'Zarin', 'Rachel', 'Fred');
