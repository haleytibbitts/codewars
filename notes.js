// Even or Odd
// - when returning a ternary statement, return goes before the condition (return isTrue ? true : false)

// Reversed Strings
// When dealing with .split() and .join(), you have to specify what/how you are splitting are joining (eg. splitting letters in a word use .split(“”). To rejoin use .join(“”).)

// Return Negative
// Can make a number variable such as “num” negative by simply calling “-num”
// Math.abs() returns the absolute value of a number (never negative). Can be used to find difference between numbers, convert negatives to positives, converts string to num (always type coerces).
// Can use -Math.abs(num). Math.abs() takes num’s absolute value, the - operator turns that value into a negative ensuring that the output will always be negative.

// String repeat
// .repeat() is a string method that returns a new string that repeats the original string a certain amount of times. (eg. s === “Hi”, n === 3,  s.repeat(n) becomes “HiHiHi”)

// Sum of positive
// Callback function inside .reduce() MUST return something (use arrow function or explicitly use return keyword)

// Remove first and last character
// .slice(1) will return everything but the first indice, .slice(-1) will return just the last indice, .slice(1, -1) will return everything in between the first and last indice.

// Square(n) Sum
// Double asterisk operator (**) is an exponential operator (eg. n ** 2 is squared, n**3 is to the power of 3, etc).

// Find the smallest integer in the array
// Can use Math.min() and the spread operator (...) to find the smallest integer (eg. Math.min(...args).

// Remove string spaces
// Empty strings (“”) will be ignores when using .join(“”).
// Also a good case for regex & the .replace() method. (eg. x.replace(/\s/g, ““), the first argument is the regex for a space)

// Grasshopper - Summation
// Addition assignment (+=) is cleaner syntax than num = num + 1 (eg. num += 1).

// Counting Sheep
// When checking if something is truth or falsy, you can use the Boolean object which coerces truthy and falsy variables into boolean form. Filter will then keep all of the truthy values (eg. sheep.filter(Boolean).length)

// Convert string to a number
// parseInt() is not a method, it is it’s own function that accepts strings as an argument
// Number() is another JS function that works similarly. Number() converts the types and parseInt() parses the value. Number() will try to convert the entire string, but parseInt() will stop at the first non-number.

// Basic Mathematical Operations
// Switch statements can be used if the logic changes based on different cases.
// Example: function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }

// Convert number to reversed array of digits
// .map(Number) will convert all of the value in the array into their number value

// Gravity Flip
// .sort() sorts things alphabetically in string type by default, so in order to it to function the way we expect it to with integers we have to pass it a comparison function
// (eg. x.sort((a,b) => a-b) for smallest to largest, b-a for largest to smallest).

// Check same case
// Reg ex syntax for checking a string to see if there are only letters /[A-Za-z]/
// Can tag .test(string) onto regex and get boolean value back
// Another way: a === a.toUpperCase() && b === b.UpperCase() (or .toLowerCase() )
// Check if not a letter using methods: a.toUpperCase() === a.toLowerCase(). Numbers and objects won’t transform as they don’t have case capabilities.
// Quarter of the year
// When dealing with conditionals, you don’t have to explicitly state a range that excludes a range that’s already been passed over (eg. a <= 3 ? yes : a  >= 4 & a <= 6 ? no : maybe).
// If the program gets to the second if statement, you can assume that the first conditional isn’t true, so you can write cleaner conditional (eg. a <= 3 ? yes : a <= 6 ? no : maybe)

// Vowel Count
// If using a conditional inside of .reduce(), you must return in the direct scope of the callback function, not inside of the conditional scope.
// If checking to see if a string includes a character, you can use ‘characters’.includes(‘string’). Will return a boolean.

// Disemvowel Trolls
// Can use regex to replace certain characters like so: str.replace(/[aeiou]/gi, “”).
// g = Look over the entire string instead of breaking at the first instance
// i = match uppercase and lowercase
// Regex is not written inside of quotations

// Digit*Digit
// Can use a unary plus operator to turn a string into a number. Just add + to the beginning of a string or expression
// Eg. +num.toString().split('').map(i => i*i).join('') returns as a number.

// You’re a square!
// To check what the square root of a number is, you can use Math.sqrt(n)
// To check if something is a floating point, you can use n % 1 != 0

// Get the Middle Character
// To create a substring, use .substr(startingPoint, howManyChars)
// Eg. s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)

// List Filtering
// If you want to use a variable’s type in a conditional, use the typeof keyword.
// Eg. v = 10. typeof v === ‘number’ returns true

// Isograms
// Hated every second of this 🙂
// When looking to compare all values in an array, you can use a for loop inside of a for loop. The first loop helps you focus on one index at a time, the second allows you to compare the current index with the others.
// If trying to find unique values in an array, you can turn it into a set and compare that way.
// Set() turns an array into a set of unique values. You can then see what the difference is.
// Eg. new Set(str.toUpperCase()).size == str.length
// Exes and Ohs
// If looking for how many matches of a certain character, use .match(value in regex)
// Eg. str = “Hello, Lola!”, str.match(/l/gi) returns array of 4 ls (g goes through entire object, i makes it case insensitive)

// Jaden Casing Strings
// Capitalizing strings: word[0].toUpperCase() + word.slice(1) (returns a string of capitalized first letter + the rest of the word)
// Writing a method and need to access the value? Use ~ this ~
// REMINDER: ~ this ~ refers to the execution context not the lexical scope.
// Since we’re calling this as a method on a string, this refers to the string.
// If we create a variable called JadenCase = str.jadenCase() and call JadenCase(), this will refer to the window since we are no longer executing within the context of our string.

// Shortest Word
// When looking for the shortest or longest word, use Math.min or max.
// Eg. Math.min(...s.split(" ").map (s => s.length)).
// Create an array of word lengths, spread the array, and find the lowest number.

// Mumbling
// When repeating letters in a string, use .repeat().

// Complementary DNA
// When using .replace(), you can use callback functions to provide a legend for replacement.
// Eg. chars = {‘a’: b’, ‘b’: ‘c’, ‘c’: ‘a’}. ‘cab’.replace(\[abc]\g, letter => chars[letter]) returns ‘abc’.

// Sum of two lowest positive integers
// Sort the array from smallest to largest using a comparison function
// Add array[0] and array[1]
// Instead of isolating the two variables in a sea of variables, sort the array into a pattern you can use (smallest numbers first).

// Multiples of 3 or 5
// Instead of creating an array, start with a the sum variable as a number so you can use an addition assignment (+=) directly in the for loop instead of pushing and reducing.

// Create Phone Number
// Good case for .replace()!
// Can create a variable with a format for the string ('(xxx) xxx-xxxx'), and then user the forEach to replace each 'x' with a number

// Find the odd int
// Bitwise XOR (the exclusive OR) operator "^": binary operation that compares corresponding bits of two operands and returns a new binary number indicating differences in the two operands.
// 1 & 0 becomes 1, 0 & 0 becomes 0, 1 + 1 becomes 0, so basically a 1 represents a difference.
// Pop inside of a reduce and it will return the item in the array that occurs an odd amount of times.
// A number XORed by itself will always return 0, which cancels itself out if it occurs an even amount of times. If a number occurs an odd number of times, there would be one occurance left uncancelled that when XORed by 0 would return itself.
