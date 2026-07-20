 const user = {
    name: 'james',
    password: 'password123'
 }

 const handler = { 
    get: (target, name) => 
        name === 'password' ? '*'.repeat(target.password.length) : target[name],
    set: (object, property, value) => {
        if (property === 'password' && value.length < 8) {
            throw new RangeError('Passwords must be at least 8 characters');
        }

        object[property] = value;
        return true;
    }
 }

 const proxiedUser = new Proxy(user, handler);

proxiedUser.password = 'pass'; // just sets it, no masking happens here
console.log(proxiedUser.password);    // NOW this triggers get -> masked