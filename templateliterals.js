const createURL = (domain, path) => 'http://' + domain + '/' + path;

console.log(createURL('example.com', 'auth/login'));

const name = 'James';
console.log(`Hi! My name is ${name}`)
console.log(`It is ${new Date().getHours() < 12 ? 'AM' : 'PM'}`)
