// Pantry & Orders

const pantry = [
  { id: 1, name: "Chocolat", icon: "🍫" },
  { id: 2, name: "Cookie", icon: "🍪" },
  { id: 3, name: "Tuna", icon: "🎣" },
  { id: 4, name: "Pasta", icon: "🍝" },
  { id: 5, name: "Potato", icon: "🥔" },
];

// Potato, Tuna
const paigesRaid = [
  { name: "Potato", icon: "🥔" },
  { name: "Tuna", icon: "🎣" },
];

const paigesRaid2 = [3, 5]; //better?

const showRaidContent = (raid) => {
  console.log("Summary of what was taken");
  for (const ingredient of raid) {
    console.log(ingredient.name);
  }
};

// const showRaidContent2 = (pantry, raid) => {
//   console.log("Summary of what was taken");
//   for (const ingredientId of raid) {
//     console.log(pantry[ingredientId].name);
//   }
// };

const generateIngredientData = (pantry, raid) => {
  return pantry.filter((ingredient) => raid.includes(ingredient.id));
};

showRaidContent(paigesRaid);
showRaidContent(generateIngredientData(pantry, paigesRaid2));
