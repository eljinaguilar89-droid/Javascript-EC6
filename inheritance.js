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

class Developer extends User {
    constructor(username, password, languages, loggedIn = false) {
        super(username, password, loggedIn);
        this.languages = languages;
    }

    listLanguages() {
        console.log(this.languages.join('\n'));
    }

    show(){
        super.show();
        this.listLanguages();
    }
}

const james = new Developer('James','password123', ['Ruby', 'Python', 'Javascript']);


james.login();
james.show();












