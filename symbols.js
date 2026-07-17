const id = Symbol('id');
const permissions = Symbol('permissions');
const user = {
    name: 'James',
    id,
    [permissions]: ['admin', 'superuser']
}

console.log(user.id === id)
console.log(user);

for (let key in user) {
    console.log(key);
}

console.log(user[permissions]);