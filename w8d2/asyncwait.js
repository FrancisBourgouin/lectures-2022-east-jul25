const someFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve("good job");
    }
    return reject("bad job");
  });
};

someFunction()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const checkResultOfSomeFunction = async () => {
  try {
    const result = await someFunction();
  } catch (e) {
    console.log(e);
  }
};
