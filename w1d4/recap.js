// Functions are meant to be reusable

Math.random();

const generateRandomInteger = function (maxValue) {
  return Math.floor(Math.random() * maxValue);
};

// That function is reusable because we use a number parameter to make it more flexible

const list = [];

const pushToList = function (value) {
  list.push(value);
};

const showValue = function (value) {
  console.log("Value is: " + value);
};

const generateMultipleRandomIntegers = function (amount, maxValue) {
  for (let i = 0; i < amount; i++) {
    // showValue(generateRandomInteger(maxValue));
    pushToList(generateRandomInteger(maxValue));
  }
};

generateMultipleRandomIntegers(10, 9001);
