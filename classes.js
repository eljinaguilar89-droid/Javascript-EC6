class User {
    constructor(username, password, loggedIn = false) {
        this.username = username;
        this._password = password;
        this.loggedIn = loggedIn;
    }

    set password(pwd) {
        this._password = pwd; 
    }

    get password() {
        return '*'.repeat(this._password.length);
    }

    login(){
        if(this.username === 'James' && this._password === 'password123'){
            this.loggedIn = true;
        }
    }

    show() {
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`LoggedIn: ${this.loggedIn}`);
    }

    static getLogInURL() {
        return 'http://localhost/login';
    }
}


const james = new User('James', 'password123');

james.login();
console.log(james.username)
james.show();

console.log(User.getLogInURL())