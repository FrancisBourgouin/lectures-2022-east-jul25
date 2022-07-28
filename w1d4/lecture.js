// Function!

const sayHiToJeffrey = function () {
  // Fine, but could be better
  console.log("Hi Jeffrey.");
};

// Parameters: More versatility (Placeholder)
// We don't know the name yet, we don't care anyway.

const sayHi = function (name) {
  console.log(`Hi ${name}`);
};

const saySomething = function (message, name) {
  console.log(`${message} ${name}`);
};

const saySomethingButNotInTheConsole = function (message, name) {
  return `${message} ${name}`;
};

const listOfHi = [];

const saySomethingAndThenPutItInAnArray = function (message, name) {
  listOfHi.push(`${message} ${name}`);
};

const fancySaySomething = (message, name, action) => {
  action(`${message} ${name}`);
};

const pushToList = function (value) {
  listOfHi.push(value);
};

fancySaySomething("hi", "Bob", console.log);

console.log(listOfHi);

const listOfGoodMornings = ["Hi Jeffrey", "Hi Paige", "Hi Michael"];
