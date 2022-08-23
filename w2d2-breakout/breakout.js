const fs = require("fs");

// setTimeout(
//   // setTimeout is synchronous
//   () => {
//     console.log("Hello!");
//   },
//   Number(process.argv[2]) * 2
// );
// setTimeout(
//   // setTimeout is synchronous
//   () => {
//     console.log("Hello!2");
//   },
//   10000
// );

// console.log("Bye!");
// console.log(process.argv[2] * 2);

// const time = Number(process.argv[2])

// if(Number.isNaN(time)){
//   return "Bad!"
// }

// setTimeout(() => {
//   const bob = "robert!";
// });

// // const name = bob

// const setName = (newName) => {
//   setTimeout(() => {
//     let name = newName;
//     console.log(name);
//     setTimeout(() => {
//       console.log("bye!");
//     }, 1000);
//   }, 1000);
// };

// setName("John");

console.log("READING THE FILE NOW"); //S1

const showContentsOfFile = (err, data) => {
  //S2
  if (err) {
    return console.log(err);
  }

  if (!data) {
    return console.log("No data :(");
  }
  console.log("Here is the content of the file");
  console.log(data);

  return data;
};

fs.readFile("./WTH2.md", "utf-8", showContentsOfFile); //S3 => Spawns A1 (showContentsOfFile)

setTimeout(
  //S4 spawns A2
  () => console.log("Wiggle"), //A2
  2000
);

console.log("READING THE FILE NOW"); //S5

// First, we console log
// Then, Define showContentsOfFile
// Then, start to readFile
// Then, start a timer
// Then, we console log
// Then we take a break (joke)
// Then we check for async tasks
// We have settimeout callback + readfile callback
// We poll to check if they're done
// We run the showContentOfFile
// We poll to check if they're done
// We run the setTimeout callback
// We poll to check if they're done
// Exit

const someArray = [1, 2, 3, 4];
someArray.forEach((value) => console.log(value));
