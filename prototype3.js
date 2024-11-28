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
