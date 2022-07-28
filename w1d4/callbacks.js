const generateRandomInteger = function (maxValue) {
  return Math.floor(Math.random() * maxValue);
};

const list = [];

const pushToList = function (value) {
  list.push(value);
};

const showValue = function (value) {
  console.log("Value is: " + value);
};

const fancyShowValue = function (value, index) {
  console.log("Value is: " + value + "at index " + index);
};

const generateMultipleRandomIntegers = function (amount, maxValue) {
  for (let i = 0; i < amount; i++) {
    // showValue(generateRandomInteger(maxValue));
    pushToList(generateRandomInteger(maxValue));
  }
};

// generateMultipleRandomIntegers(10, 9001);

// Higher Order Functions!
// CEO COO CFO => Worker / Boss

const generateMultipleRandomIntegersHOF = function (amount, maxValue, action) {
  for (let i = 0; i < amount; i++) {
    action(generateRandomInteger(maxValue), i);
  }
};

generateMultipleRandomIntegersHOF(10, 9001, pushToList);
generateMultipleRandomIntegersHOF(10, 9001, showValue);
generateMultipleRandomIntegersHOF(10, 9001, fancyShowValue);
console.log(list);

const listOfPeople = ["Bob", "Robert", "Sacha", "Alex"];

// for (const name of listOfPeople) {
//   console.log(`Hi ${name}`);
// }

const sayHi = function (name) {
  console.log(`Hi ${name}`);
};

listOfPeople.forEach((name) => console.log(`Hi ${name}`));

// Arrow functions!

const sayHiArrow = (name) => console.log(`Hi ${name}`);
// 🥔 + 🥔 + 🐠 = 10
// 🐠 + 🐠 = 40

// 🥔 + 🥔 + 🐠 = 10
// 2 * 🐠 = 40

// 🥔 + 🥔 + 🐠 = 10
// 🐠 = 20

// 🥔 + 🥔 + 20 = 10
// 🐠 = 20

// const homemadeForEach = (array, action) => {
//   for (let index = 0; index < array.length; index++) {
//     action(array[index], index, array);
//   }
// };

// const bigOutput = (value, index, array) =>
//   console.log(`Value is ${value} at index ${index} in the array ${array}`);

// listOfPeople.forEach((value) => console.log(value));

// homemadeForEach(bigOutput);

// const newArray = new Array()

const someGrade = { score: 0.85, subject: "history" };

const judging = (grade, parentCB) => {
  if (parentCB(grade)) {
    console.log("GOOD JOB.");
  } else {
    console.log("I AM DISAPPOINT");
  }
};

const tooChillParents = () => true;

const moodyParents = (grade, mood) => {
  let minScore = 0.75;
  if (mood === "angry") {
    minScore = 0.9;
  }

  return grade.score > minScore;
};

const historianParents = (grade) => {
  let minScore = 0.75;
  if (grade.subject === "history") {
    minScore = 0.9;
  }

  return grade.score > minScore;
};

const happyParents = (grade) => moodyParents(grade, "happy");

const angryParents = (grade) => moodyParents(grade, "angry");

judging(someGrade, tooChillParents);
judging(someGrade, historianParents);
judging(someGrade, (grade) => moodyParents(grade, "happy"));
judging(someGrade, (grade) => moodyParents(grade, "angry"));
judging(someGrade, angryParents);

const ref = tooChillParents;
const call = tooChillParents();

console.log(ref, call);

listOfPeople.forEach;

[1, 2, 3].forEach((element, index) => {
  console.log(element, index);
});
