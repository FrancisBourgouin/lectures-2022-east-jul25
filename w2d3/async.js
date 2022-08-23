// let name = "";

// setTimeout(() => {
//   name = "bob";
// }, 0);

// console.log(name);

// const someArray = [1, 2, 3, 4, 5];

// const showElementOfArray = (value, index, array) => {
//   console.log(`${value} at index ${index} of the array ${array}`);
// };

// someArray.forEach(showElementOfArray);

// const someObject = {
//   a: 1,
//   sayHi: () => console.log("Hi!"),
// };

// someObject.sayHi();

// console.log("something");

const someArray = [1, 2, 3, 4, 5];
const copyArray = someArray;
const someOtherArray = [1, 2, 3, 4, 5];

console.log(someArray === copyArray);
