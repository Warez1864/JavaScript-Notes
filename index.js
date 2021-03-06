
// Set the variable var1 to a string type
let var1 = "";

// Change the type of the variable var1 from a string to an integer
var1 = 25;

// Set the variable var2 to an integer type
let var2 = 1;

// Set the variable var3 to a float type
let var3 = 2.5;

// Make an empty object called person
let person = {

}

// Make an array with some numbers
let var4 = [
    1, 2, 3, 4
];

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



// Make a function that multiplies 50 by 5
// So now it will calculate 50 * 5 which is 250
function square(number, lastNumber) {
    return number * lastNumber;
}
console.log(square(50, 5));



// Make a function that minuses 150 by 50
// So now it will calculate 150 - 50 which is 100
function minuss(number, lastNumber) {
    return number - lastNumber;
}
console.log(minuss(150, 50));



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

// We Refer these 4 Operators as Relational Operators

// The Operator > is the "Greater Than" // So we are checking now if n is greater than 0
// So our output will be true, because 1 is greater than 0
console.log(n > 0);

// The Operator >= is the "Greater Than or Equal To"
// So now we wil get true again because 1 is obviously equal to 1, if not greater than 1
console.log(n >= 1);


// The Operator < is the "Less Than" // So we are checking now if n is less than 1
// Our output will be false, because 1 is not less than 1
console.log(n < 1);

// The Operator <= is the "Less Than or Equal To"
// So our output will be true because 1 is equal to 1, if not less than 1
console.log(n <= 1);


// We Refer the === Operator as a Strict Equality Operator
// This Operator checks to see if 1 have the same type + value as 1
// Becuase the value is 1 and the type is a number on both sides, our output will be true
console.log(1 === 1);

// Because only the value is equal and not the type, we wil get false
// Both the type and value have to be the same
console.log('1' === 1);

// If we want to check if n is not equal to a given value, we use the !== Operator
// So now our output will be false, because 1 is equal to 1
console.log(1 !== 1);

// We Refer the == Operator as a Lose Equality Operator
// This operator only checks to see if the value is the same
// sao even if we have a string with a number, we still get true
console.log("1" == 1);


// Ternary Operator
// The ? is the Ternary Operator
// Depending on the result you can set the type variable to a different value

// "points > 100" is the condition  // If "?" its true we wil use the value 'gold', otherwise we wil use the other value 'silver'
let points = 120;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);



// Logical JavaScript Operators

// Logical AND (&&)

// This && Operator returns true if both operands is true
// So now we wil get true
console.log(true && true);

// But if one is false, (it doesen't matter which one), then it wil be false
console.log(false && true);

// An exaple, if we want to check the customer has a high income, then we wil accept the loan
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// (Remember that the || Operator isnt't neceseraliy a true or false, that depends on the operands we have) Exaple, false || 1   // Our output will be 1
// So when the JavaScript Engine tries to evaluate our expression, it looks at each operand. If that operand isn't a boolean true or false, it wil try to interpret it as a truthy or falsy
// This || Operator returns true if one of the operands is true, (it doesen't matter which one is true)
let highIncome2 = false;
let goodCreditScore2 = true;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;
// So if eligibleForLoan2 is true, Eligible will become true
console.log('Eligible', eligibleForLoan2);

// NOT (!)
// if eligibleForLoan2 is true, the ! Operator will convert that to false
let applicationRefused = !eligibleForLoan2;
// So if applicationRefused is false, Application Refused will be false
console.log('Application Refused', applicationRefused);


// Falsy
// (A Falsy is not the same as a false in a boolean!)

// In a Falsy we have:

// undefined
// null
// 0
// false
// ''
// NaN or 'Not a Number' is a special value in JavaScript, when we are dealing with a mathematical calculation that does not produce a vald number, this value is returned

// If we use any of these values in a logical expression, they will be treated as falsy

// Anything that is not a falsy is a truthy

// false || 1 || 2
// As soon as it finds a truthy, that operand is returned, so we wil get 1 in the console (The evaluation stops when the first value is returned in the console)
// It ignores all the other operands in the right side even if we had a millions of them, and that is called a Short-circuiting




let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor | defaultColor;

console.log(currentColor);

// The output will be red in the console, because the user has selected a color (red). 
// If the user doesn't select a color, then the output will be blue in the console


// Bitwise JavaScript Operators

// Each digit is called a bit
// 1 = 00000001
// 2 = 00000010

// Bitwise Operators in JavaScript or any other programming languages, are simmilar to logical operators

// Operators Precedence
let q = 2 + 3 * 4;

console.log(q);
// The ouput will be 14, because the Multiplication Operator has more precedence than the Addtional Operator


// Operators Exercise

// The Answer:

// let o = 'red';
// let u = 'blue';

// let c = o;
// o = u;
// u = c;

// console.log(o);
// console.log(u);


// My first solution...

let o = 'red';
let u = 'blue';

let firstColor = u || o;
let secondColor = o || u;

console.log(firstColor);
console.log(secondColor);





// Control Flow Section

// Conditional Statements
//If...else

// Hour
// If Hour is between 6am and 12 pm: Good Morning
// If hour is between 12pm and 6pm: Good Afternnon
// Otherwise: Good Evening

// In between the paranthesis () is the condition
// If the conition evaluates to true, the statement we put after, wil be executted
// If we have multiple statements, we have to put it in between the curly braces, and we refer these (the curly braces and the statements) as the block of code


let hour = 20;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
console.log('Good Evening');




//Swicth...case

let role;