const users = [
    {user: 'james', password: 'password1'},
    {user: 'rebecca', password: 'password2'},
    {user: 'hamza', password: 'password3'},
];

console.log(users.find(value => value.user === 'james').password);
console.log(users.findIndex(value => value.user === 'james'));
