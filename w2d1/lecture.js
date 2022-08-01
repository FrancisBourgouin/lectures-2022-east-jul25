// const multiplyByTwo = (value) => {
//   if(typeof value !== 'number'){
//     return "BAD PERSON"
//   }
// }

// const someObject = { a: { bob: true }, b: 2 }; // someObject stores the reference to the object
// const otherObject = someObject;

// const coolObject = {};
// for (const key in someObject) {
//   coolObject[key] = someObject[key]; // Shallow Copy (Recursive version would be deep)
// }

// const fancyObject = { ...someObject };

// coolObject.a.bob = 9001;
// // coolObject.a = 9001;

// console.log(someObject, coolObject);

// 1 === 1;
// someObject === otherObject;

const outMugObject = {
  capacity: 330,
  currentVolume: 200,
  color: "white",
  material: ["ceramic"],
  content: "brown hot liquid",
  temp: 45,
};

const newMug = { ...outMugObject };

newMug.currentVolume = 0;

console.log(outMugObject, newMug);

// throw new Error()

// expect(() => fct()).to.throw();

const bob = 56;
bob = 10;
