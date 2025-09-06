


class person {
    constructor(firstName='Umair', lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }   
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}
export default person;