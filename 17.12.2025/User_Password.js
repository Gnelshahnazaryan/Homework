let _password = Symbol("Password");

class User {
    constructor(name, password) {
        this.name = name;
        this[_password] = password;
    }

    checkPassword(input) {
        return input === this[_password];
    }

    changePassword(newPassword) {
        this[_password] = newPassword;
    }
}

const person = new User("Bob", "secret");

console.log(Object.keys(person));
console.log(person.checkPassword("secret1"));
