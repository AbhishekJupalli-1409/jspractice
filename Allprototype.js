//OBJECT PROTOTYPES

const objabhi = {
    name: 'John',
    age: 30,
    display: function () {
        console.log(`${this.name}- ${this.age}`)
        return null;
    }
}




//ARRAY prototypes

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



//String Prototype
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






//Number Prototype

const num = 123.456;

// toString
console.log(num.toString()); // "123.456"

// toExponential
console.log(num.toExponential(2)); // "1.23e+2"





//Function Prototype

function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// call
greet.call(null, "Hello", "Abhi"); // "Hello, Abhi!"

// apply
greet.apply(null, ["Hi", "Abhi"]); // "Hi, Abhi!"
//or else pass with this context


// bind
const boundGreet = greet.bind(null, "Hey");
boundGreet("Abhi"); // "Hey, Abhi!"