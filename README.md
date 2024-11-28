In JavaScript, every object and array inherits properties and methods from its prototype. Prototypes are the mechanism by which JavaScript objects inherit features. Let's explore the prototypes for common objects, including Object, Array, String, Number, Function, and Date.

### 1. Object Prototype
The base prototype from which all objects derive properties and methods.

#### Common Methods:
* Object.prototype.hasOwnProperty(property)
* Object.prototype.toString()
* Object.prototype.valueOf()
#### Example:
```
const obj = { name: "Abhi", age: 25 };

// hasOwnProperty
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("gender")); // false

// toString
console.log(obj.toString()); // [object Object]

// valueOf
console.log(obj.valueOf()); // { name: "Abhi", age: 25 }
```
### 2. Array Prototype
Provides methods to manipulate and query arrays.

#### Common Methods:
* Array.prototype.push()
* Array.prototype.pop()
* Array.prototype.map()
* Array.prototype.filter()
* Array.prototype.reduce()
* Array.prototype.forEach()
#### Example:
```
const arr = [1, 2, 3, 4];

// push and pop
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]
arr.pop();
console.log(arr); // [1, 2, 3, 4]

// map
const squared = arr.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16]

// filter
const evens = arr.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```
### 3. String Prototype
Contains methods to manipulate and query strings.

#### Common Methods:
* String.prototype.toUpperCase()
* String.prototype.toLowerCase()
* String.prototype.includes()
* String.prototype.startsWith()
* String.prototype.slice()
* String.prototype.replace()
#### Example:
```
const str = "Hello, World!";

// toUpperCase and toLowerCase
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"

// includes
console.log(str.includes("World")); // true

// startsWith and slice
console.log(str.startsWith("Hello")); // true
console.log(str.slice(7, 12)); // "World"

// replace
console.log(str.replace("World", "Abhi")); // "Hello, Abhi!"
```
### 4. Number Prototype
Contains methods for number manipulation.

#### Common Methods:
* Number.prototype.toFixed()
* Number.prototype.toString()
* Number.prototype.toExponential()
#### Example:
```
const num = 123.456;

// toFixed
console.log(num.toFixed(2)); // "123.46"

// toString
console.log(num.toString()); // "123.456"

// toExponential
console.log(num.toExponential(2)); // "1.23e+2"
```
### 5. Function Prototype
Defines properties and methods for functions.

#### Common Methods:
* Function.prototype.call()
* Function.prototype.apply()
* Function.prototype.bind()
#### Example:
```
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// call
greet.call(null, "Hello", "Abhi"); // "Hello, Abhi!"

// apply
greet.apply(null, ["Hi", "Abhi"]); // "Hi, Abhi!"

// bind
const boundGreet = greet.bind(null, "Hey");
boundGreet("Abhi"); // "Hey, Abhi!"
```
### 6. Date Prototype
Contains methods to work with dates and times.

#### Common Methods:
* Date.prototype.getFullYear()
* Date.prototype.getMonth()
* Date.prototype.getDate()
* Date.prototype.toISOString()
* Date.prototype.getTime()
#### Example:
```
const now = new Date();

// getFullYear, getMonth, getDate
console.log(now.getFullYear()); // e.g., 2024
console.log(now.getMonth()); // e.g., 10 (November, 0-based)
console.log(now.getDate()); // e.g., 28

// toISOString
console.log(now.toISOString()); // e.g., "2024-11-28T12:34:56.789Z"

// getTime
console.log(now.getTime()); // Milliseconds since Jan 1, 1970
```