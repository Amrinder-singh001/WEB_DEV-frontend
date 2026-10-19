// Operations in JavaScript (Short Notes)

// Operations are used to perform calculations and compare values in JavaScript.

// 1. Arithmetic Operators
// Used for mathematical calculations.

// + → Addition
// - → Subtraction
// * → Multiplication
// / → Division
// % → Modulus (Remainder)
// ** → Exponent (Power)

// Example:

// let a = 10;
// let b = 3;

// console.log(a + b); // 13
// console.log(a % b); // 1

// 2. Assignment Operators
// Used to assign values to variables.

// = Assign
// += Add and assign
// -= Subtract and assign
// *= Multiply and assign
// /= Divide and assign

// Example:

// let x = 5;
// x += 2; // x = 7

// 3. Comparison Operators
// Compare two values and return true or false.

// == Equal (checks value only)
// === Strict Equal (checks value and data type)
// != Not Equal
// !== Strict Not Equal
// > Greater than
// < Less than

// Example:

// console.log(5 == "5");  // true
// console.log(5 === "5"); // false

// 4. Logical Operators
// Used to combine multiple conditions.

// && AND
// || OR
// ! NOT

// Example:

// // console.log(true && false); // false







// NaN in JavaScript (Short Notes)

// NaN stands for Not a Number.

// It is a special value that represents an invalid or undefined mathematical result.

// Examples:

// console.log(0 / 0);       // NaN
// console.log("Hello" * 5); // NaN

// Important Points

// NaN means the result is not a valid number.
// The type of NaN is "number".
// NaN is not equal to itself.

// Example:

// console.log(typeof NaN);   // "number"
// console.log(NaN == NaN);   // false

// Check for NaN

// console.log(isNaN("Hello")); // true
// console.log(isNaN(25));      // false

// Remember:
// NaN = Invalid Number Result. It appears when JavaScript cannot perform a valid numeric calculation.