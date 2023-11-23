
//FUNCTIONS - is a block of code designed to perform a particular task,  is executed when "something" invokes it (calls it).
/* --Function parameters are listed inside the parentheses () in the function definition.

--Function arguments are the values received by the function when it is invoked.

--Inside the function, the arguments (the parameters) behave as local variables.

--Variables declared within a JavaScript function, become LOCAL to the function.
 */

//Named function or function declaration:
/*function constName(firstName) {
    console.log(`Name is ${firstName || 'Tamlin'}`);
}*/

//factory function: creates an object and returns it 

/*function person () {
    let data = {
        firstName: 'Peter',
        age: 20
    }
    return data 
}*/
// function person(firstName, lastName, age, hrs, rate) {
//     return {
//         /*name: firstName,
//         surname: lastName,
//         userAge: age,
//         hrsWorked: hrs,
//         userRate: rate, */ firstName, lastName, age, hrs, rate // to shorten it 
//     } 
// }
// let person1 = person('Peter', 'Mukanya', 3, 60, 500)
// let person2 = person('John', 'Mukanya', 1, 20, 350)
// console.log(person1);
// console.log(person2); //when to use a factory function? when u make a verification code 

// /*Constructor function: allows us to create an object. Then return 'this' object. --The first letter is uppercase only in constructor
// functions and class. Only in the constructor function do we need tp make use of ' new keyword'. */
// function Laptop(make, amount) {
//     this.make = make
//     this.amount = amount // equal sign means assigning a value 
//     return this  
// }
// function Smartphone(amount) {
//     this.amount = amount 
// }
// let laptop1 = new Laptop('HP', 18000)
// let laptop2 = new Laptop('Dell', 20000)
// let samsungA51 = new SmartPhone(20000)
// console.log(laptop1);
// console.log(laptop2);
// console.log(laptop2 instanceof SmartPhone /*to check if the related/dna */); /*to check the data type would be 'typeof */

//Anonymous function: a function without a name. 
//(function () {
    //...
// });

//constName() //if theres no value inside the function, it remains undefined 
//constName("Leigh")

//Arrow function: are a concise way to write anonymous functions (functions without a name) in JavaScript.
/*const add = (a, b) => {
    return a + b;
};  //basic syntax*/ 

//Here, add is a function that takes two parameters a and b and returns their sum. 
//The => syntax replaces the need for the function keyword in traditional function expressions.

//Recursive function: a function that calls itself until it doesn’t.  you need to have a condition for it to stop 
/*function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}*/
 
/*function repeat(limit) {
  let cnt = 1  //remove it from the function if you wish to display numbers 1-10
    if(cnt < limit) {
        console.log(cnt);
        cnt++
        repeat(limit--)
    }
}
repeat(10)*/

/*function display() {
    let numb1 = 9
    console.log(`Inside of a function: ${numb1}`);
}
display()
console.log(`Outside a function ${numb1}`); */

//Constructor property : returns a reference to the constructor function that created the instance object.
// function NewRecord(name) {
//     this.name = name 
// }
// let person1 = new NewRecord('Leigh');
// let person2 = {name : 'San'}
// //console.log(person2);
// //can also check if its an instanceof that particular property / another alt method for instanceof
// console.log(person1.constructor === NewRecord); //True

// //It is the same as using instanceOf
// console.log(person1 instanceof NewRecord); //True 

// //Functions are objects: -----------> anything inside js is an object
// let person = {
//     firstName: 'Leigh',
//     lastName: 'San',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(person);
// console.log(fullName); 

//when you don't want to display a value in a console but just display the persons salary or one specific thing
// let person = {
//     firstName: 'Leigh',
//     lastName: 'San',
//     hrs: '120',
//     rate: 500, 
//     salary : function() {
//         return this.hrs * this.rate
//     }
// }
// console.log(person.salary())
// person.salary()

/*function addition () {
    let numb1 = document.getElementById(`numb1`).value
    let numb2 = document.getElementById(`numb2`).value
    //--to get the value to the input element 
    //to wrap everything together add .value
    let sum = numb1 + numb2
    //lblOutput.innerHTML = `<strong>$ {sum}</strong>`
    lblOutput.textContent = sum
}*/
//let numb1 = (8,7,2)
//console.log(numb1);----it will display the last number which is 2

//built-in functions 



/*Math methods : allows us to modify*/
// let numbers = [2, 4, 11, 1]
// let a = 3
// let b = 2
// console.log(`Highest number: ${Math.max(...numbers)}`); //... is the spread operator 
// console.log(`Lowest number: ${Math.min(...numbers)}`);
// // 3^2 = 3 * 3
// console.log(`pow(x,y): ${Math.pow(a, b)}`);
// console.dir(Math);
// //continuing..........
// let numbers = [9, 4, 2, 5, 10]

// function highestNumber(arguments) {   // rest operator allows you create a function that supports man arguments
//     for(let number in arguments) {   //for 'of' will display the elements whereas  for 'in' will the index
//         console.log(number);
//     }
// }
// highestNumber(numbers)

//longer method: 
// function highest(args) {
//     let x = args[0];
//     for(let m in args) {
//         if(args[m]>x) {
//             x=args[m]
//         }
//         //console.log(m);
//     }
//     console.log(x)
// }
// highest(numbers)

// //shorter method
// //numbers called a spread operator(...)
// console.log(Math.max(...numbers));

// Math.round() //is gonna round it off to the nearest integer
//Strings
// let firstName = 'Tamlin'
// console.log(firstName.split("").reverse().join(""));


/*
Exercises on the below methods
- charAt()
- endsWith()
- includes()
- lastIndexOf()
- indexOf()
- replace()
- repeat()
- startWith()
- subString()
- trim()
- trimEnd()
- trimStart()
- slice()
- split() */

// let rIdx = Math.floor(Math.random() * (numbers.length -1))
// console.log(numbers);
// console.log(rIdx);
// console.log(numbers[rIdx]);

//Math method: PI 
// //PI is a constant and in math is specifically used to calculate the area of a circle. 
// console.log(Math.PI);

// //Round the value to the nearest integer
// console.log("round(3.5));
// //Want to return the highest number
// let numbers = [9, 4, 20, 2, 5, 10, 9]
// let data = [11, 39]
// console.log(Math.max(9, 11, 15, 20, 7));
// console.log(Math.max(...numbers)); //specific the spread operator with a loop to define which is the highest 


// Template Literals/Date 
// let currentDate = new Date();
// console.log(currentDate);

// //to get the current date: 
// console.log(currentDate.getDate());

// //to get the current year: 
// console.log(currentDate.getUTCFullYear());

// //to get the year(another alt method):
// console.log(currentDate.getFullYear());

// //to get the current month: 
// console.log(currentDate.getMonth() + 1);


// //specifying a date with a string: 
// let anotherDate = new Date("2022-11-5")
// console.log(anotherDate);

//specifying the date is a integer: 
// let thirdAttempt = new Date(2021, 11, 11)
// console.log(thirdAttempt);

//to display an error
// console.error("This is an error");


//Built-in functions: 
// console.log(isFinite("4")); //checking if its a string
// console.log(isFinite(4)); //checking if its a number 
// console.log(isNaN(8)); //displays that its not a number and undefined 
// console.log(eval("8+6")); //it will add up the numbers 
// console.log(parseInt(89.5)); //converts the value of a string to a integer or number
// console.log(parseFloat("89")); //converts a string to a floating point 
