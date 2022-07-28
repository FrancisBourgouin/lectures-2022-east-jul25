// for..in
// for..of
// == vs === (order of coercion)
// Accessing object values
// continue
// nested objects

// Loops!

// for (let i = 0; i < 10; i++) {
//   console.log("wiggle");
// }

const someArray = ["Edgar", "Bailee", "Cera", "Edlyn", "Paige"];

// for (let i = 0; i < someArray.length; i++) {
//   console.log(`Hi ${someArray[i]}`);
// }

for (let i = 0; i < someArray.length; i++) {
  const name = someArray[i];
  const index = i;
}

for (const name of someArray) {
  // Works on iterable elements
}

for (const index in someArray) {
}

const someMug = {
  0: "zero",
  name: "Muggy",
  capacity: 350,
  material: "ceramic",
  color: "pretty",
};

someMug.potato = "🥔";

someMug.drink = {
  coffee: 0.95,
  milk: 0.05,
};

const keyThatIWant = "name";

someMug.name; // Drax style
someMug.keyThatIWant;
someMug[0];

someMug[keyThatIWant];
someMug["name"];

const marianaTrench = {
  plateau: {
    otherPlateau: {
      otherOtherPlateau: {
        content: "🐠",
      },
    },
  },
};

// marianaTrench.plateau.otherPlateau.otherOtherPlateau.content

const firstPlateau = marianaTrench.plateau;
const secondPlateau = firstPlateau.otherPlateau;

Object.keys(secondPlateau);

const thirdPlateau = secondPlateau.otherOtherPlateau;
const fish = thirdPlateau.content;
