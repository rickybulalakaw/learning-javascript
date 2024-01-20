

// const age = 30;
// age = 31;
// console.log(age);
// This will result in error because constants cannot be reassigned
// const also requires an assignment immediately 

// Data types: 

// String 
// const name = 'John'
// // Numbers 
// const age = 30;
// const raing = 4.5;

// // Boolean 
// isCool = true;

// // null 
// x = null;

// undefined 
// let z;

// console.log(typeof x);

// Concatenation
// console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// Template Strings 
// console.log(`My name is ${name} and I am ${age} years old.`);

// const hello = `My name is ${name} and I am ${age} years old.`
// console.log(hello);

// const s = 'Hello World';

// console.log(s.length);
// console.log(s.toUpperCase());

// console.log(s.substring(0,5));

// console.log(s.split(''));
// Returns array 

// const s = 'technology, computers, it, code';
// console.log(s.split(', '));

// const numbers = new Array(1,2,3,4,5);

// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears', 10, true];
// console.log(fruits);

// get first entry in array
// console.log(fruits[0]);

// add to array if you know the index
// fruits[3] = 'grapes';
// console.log(fruits);

// add to end of an array, when you don't know the index 
// fruits.push('mangos');
// console.log(fruits);

// remove from end of array 
// fruits.pop();
// console.log(fruits);

// add to beginning of array 
// fruits.unshift('strawberries');
// console.log(fruits);

// remove from beginning of array 
// fruits.shift();
// console.log(fruits);

// find index of item 
// console.log(fruits.indexOf('oranges'));

// determine if something is an array 
// console.log(Array.isArray(fruits));

// objects 
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log('First Name: ' + person.firstName);
// const {firstName, lastName, address: {city}} = person;

// console.log(city);

// person.email = 'john@gmail.com';
// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     }, 
//     {
//         id : 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id : 3,
//         text: 'Dentist appt',
//         isCompleted: false
    
//     }
// ]

// console.log(todos);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// LOOPS 
// FOR 
// for ( let i = 0; i < 10; i++) {
//     console.log(i);
// }


// WHILE 
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// Use length of array 
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// FOR OF LOOP
// for (let todo of todos) {
//     console.log(todo.text);
// }
// Similar to FOR loop of Python 

// HIGHER ORDER FUNCTIONS
// forEach, map, filter
// forEach
// todos.forEach(function(todo) {
//     console.log(todo.text);
// }
// )
// todo will be the variable you create to identify each item in the array 

// map
// todos.map(function(todo) {
//     return todo.text;
// }
// )

// const todoText = todos.map(function(todo) {
//     return todo.text;
// }
// )

// console.log(todoText);


// filter
// const todoComplete = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }
// )

// console.log(todoComplete);


// const todoComplete = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }
// ).map(function(todo) {
//     return todo.text;
// })

// console.log(todoComplete);

// OPERATIONS 
// const x = 4;
// const y = 10;

// if (x === 10) {
//     console.log('x is 10');

// } else if (x > 10) {
//     console.log('x is greater than 10');
// } else {
//     console.log('x is less than 10');
// }

// if (x > 5 && y > 10) {
//     console.log('x is greater than 5 or y is greater than 10');
// }

// OR >> ||
// AND >> && 

// TERNARY OPERATOR
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// // console.log(color);
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }


// FUNCTIONS 
// function addNumbs(num1, num2) {
//     // console.log(num1 + num2); // Print in console 
//     return num1 + num2; // Return value

// }

// addNumbs(2,3);


// OBJECT ORIENTED PROGRAMMING 
// class Person {
//     constructor(firstName, lastName, dob, gender, interests) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//         this.gender = gender;
//         this.interests = interests;
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
// }

// Instantiate object from class 
// const person1 = new Person('John', 'Doe', '4-3-1980', 'male', ['music', 'skiing']);

// console.log(person1);

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.dob);
// console.log(person1.gender);
// console.log(person1.interests);

// console.log(person1.interests[1]);

// console.log(person1.interests.length);

// console.log(person1.interests[person1.interests.length - 1]);

// console.log(person1.interests[person1.interests.length - 1]);

// console.log(person1.interests[person1.interests.length - 1]);

// console.log(person1.interests[person1.interests.length - 1]);

// console.log(person1.interests[person1.interests.length - 1]);

// console.log(person1.interests[person1.interests.length - 1]);


// console.log(person1);


// console.log(window);

// alert(1)
// localStorage()

// console.log(document.querySelector('.container'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

// document.getElementById('my-form').addEventListener('submit', function(e) {


// loop through item 
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// Alternatiive 
// items.forEach(function(item){
//     console.log(item);
// });


// Manipulating in the DOM 

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// // ul.firstElementChild.textContent = 'Hello';
// // ul.children[1].innerText = 'Brad';
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'blue';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.firstElementChild.innerHTML = '<h1>First Element Changed</h1>';

//     ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
//     // console.log(e);
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields 
        nameInput.value = '';
        emailInput.value = '';
    }
}