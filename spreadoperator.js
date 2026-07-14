const array1 = [1,2,3];
const array2 = [4,5,6];

const add = (a,b,c) => a + b + c;
console.log(add(...array1));

const array3 = [...array1, ...array2, 7,8,9]
console.log(array3);

const obj1 = {name: 'James'};
const copyOfObj1 = {...obj1};
const obj2 = {password: 'home123'};
obj1.name = 'Sarah';
const obj3 = {...obj1, ...obj2, admin: true}
console.log(obj3)
console.log(copyOfObj1)