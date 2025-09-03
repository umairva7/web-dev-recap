//Strings, Numbers, Booleans, Null, Undefined, Symbols
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

//Concatenation
console.log('My name is ' + name + ' and I am ' + age);


//Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//Objects
const person = {
    firstName: 'John',
    lastName: 'Doe',        
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {  
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.address.state);

//Arrays - can hold multiple data types
const todo=[
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,          
        text: 'Meeting with boss',
        isCompleted: true,
    }
]
console.log(todo[1].text);
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);


//Loops
todo.forEach(function(todo){
    console.log(todo.text);
}

//classes
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;         
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }   
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }   
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1.getFullName());



//DOM Manipulation
document.getElementById('my-form').addEventListener('submit', function(e){
    e.preventDefault();
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email').value);
});

//ES6 Features
//Arrow Functions
const add = (x, y) => x + y;
console.log(add(5, 3)); // 8            
//Spread Operator   
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

//Destructuring
const { firstName, lastName } = person;
console.log(firstName); // John
console.log(lastName); // Doe

//Modules
import { sayHello } from './utils.js';
sayHello('John');   

//Asynchronous JS - Promises    
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John', age: 30 };
            resolve(data);
        }, 2000);       
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(err => console.error(err));          


//Async/Await
const getData = async () => {
    try {   
        const data = await fetchData();
        console.log(data);
    } catch (err) {
        console.error(err);
    }       
};

getData();

//Error Handling
try {
    throw new Error('Something went wrong');
} catch (err) {
    console.error(err.message);
}   
finally {
    console.log('This will always run');
}

