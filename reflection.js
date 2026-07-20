const user = {
    name: 'james',
    password: 'password123'
}

// console.log(Object.defineProperty(user, 'accessLevel', { value: 'admin'}))

console.log(Reflect.defineProperty(user, 'accessLevel', {value: 'admin'}))

if (Reflect.defineProperty(user, 'accessLevel', { value: 'admin'})){
    console.log('Property created');
} else {
    // There was a problem
}

console.log(Reflect.deleteProperty(user, 'name'))
console.log('password' in user)
console.log(Reflect.has(user,'password'))