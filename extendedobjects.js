const username = 'admin';
const password = 'password';
const department = 'development';

const auth = {
    username,
    password,
    [department]: true,
    resetPassword: (newPassword) => {
        
    }
}

console.log(auth)