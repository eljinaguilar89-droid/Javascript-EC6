const auth = {
    username: 'James',
    password: 'Password123',
    admin: true,
};

const {admin, ...restOfObject} = auth;

console.log(restOfObject);

const login = ({username, password}) =>
    username === 'James' && password === 'Password123';

console.log(login(restOfObject));