const user = {
    name: 'James',
    password: 'Password123',
    loggedIn: true
};

const userMap = new Map();


console.log(userMap.set('name', 'Rebecca'));
console.log(userMap.set('password', 'home123'));
console.log(userMap.set('loggedIn', true));

console.log(userMap.forEach(value => console.log(value)));

console.log(Object.keys(user).forEach(key => console.log(user[key])));


// console.log(userMap.get('name'));
// console.log(userMap.size)

// console.log(userMap.set(new Date(), true));
// console.log(userMap.set(user, true));
