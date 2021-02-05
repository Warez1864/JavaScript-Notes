
// Set the variable var1 to a string type
let var1 = ""

// Change the type of the variable var1 from a string to an integer
var1 = 25;

// Set the variable var2 to an integer type
let var2 = 1

// Set the variable var3 to a float type
let var3 = 2.5

// Make an empty object called person
let person = {

}

// Make an array with some numbers
let var4 = [
    1, 2, 3, 4
]

// Add the number 5 to the array
var4.push(5);


// Make a function called greet, and show the greeting Hello And Welcome to each person
// function greet(name)  -  (name) is the paramether
function greetings(name, surName, lastName) {
    console.log('Hello And Welcome ' + name + ' ' + surName + ' ' + lastName);
}
// greetings('John');  -  ('John') is the argument
greetings('John', 'Smith', 'Lauren');
greetings('Peter', 'Andersen', 'Tomsen')
greetings('Lars', 'Sørensen', 'Larsen')



// Make a function that calculates 2 numbers
// So now it will calculate 50 * 50 which is 2500
function square(number) {
    return number * number;
}
console.log(square(50));



//


function minus(numbers) {
    return numbers - numbers;
}
console.log(minus(55));




// JavaScript Operators

// The variable x is set to 10
let x = 10;
// The variable y is set to 3
let y = 3;

// x + y is called an expression in JavaScript
// An expression is something that produces a value

// Arithmetic JavaScript Operators

// Addition
console.log(x + y);
// Subtraktion
console.log(x - y);
// Multiplikation
console.log(x * y);
// Division
console.log(x / y);
// Remainder of division
console.log(x % y);
// Exponentiation Operator (x^y)
console.log(x ** y);



// Increment (++)
console.log(x) // Output 10
console.log(++x) // Output 10 + 1 = 11

console.log(x++) // Output 10, x = 11
console.log(x) // Output 11


// Decrement (--)
console.log(x) // Ouput 10
console.log(--x) // Output 10 - 1, x = 9

console.log(x--) // Output 10, x = 9
console.log(x) // Output 9





// Asignment JavaScript Operators
let a = 5; 

a = a + 10; // a is 5 so its the same as 5 + 10 // Output: 15

// a += 10 is the same as a = a + 10; // Output: 15
a += 10;

// You can of course use all the arethmetic operators in the asignment operators
// For example a *= 10; or a/= 10;




// Comparison JavaScript Operators
// The result of an expression, that includes a comparison operator is a boolean, so its either true or false.

let n = 1;

// The Operator > is the "Greater Than" // So we are checking now if n is greater than 0
// So our output will be true, because 1 is greater than 0
console.log(n > 0);

// The Operator >= is the "Greater Than or Equal To"
// So now we wil get true again because 1 is obviously equal to 1, if not greater
console.log(n >= 1);


// The Operator < is the "Less Than" // So we are checking now if n is less than 1
// Our output will be false, because 1 is not less than 1
console.log(n < 1);


console.log(n < 1);







// Logical JavaScript Operators

// Bitwise JavaScript Operators


