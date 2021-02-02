
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


// Make a function called greet, and show a greeting
function greetings(name, surName, lastName) {
    console.log('Hello And Welcome ' + name + ' ' + surName + ' ' + lastName);
}
greetings('John', 'Smith', 'Lauren');
greetings('Peter', 'Andersen', 'Tomsen')
greetings('Lars', 'Sørensen', 'Larsen')

// function greet(name)  -  (name) is the paramether
// greetings('John');  -  ('John') is the argument


// Make a function that calculates 2 numbers
function square(number) {
    return number * number;
}
console.log(square(50));