const ws = new WeakSet();
let user = { name: 'James'}
console.log(ws.add(user));
console.log(ws.has(user));

console.log(ws.delete(user));
console.log(ws.has(user))

const wm = new WeakMap();
console.log(wm.set(user,true));
console.log(wm.get(user));