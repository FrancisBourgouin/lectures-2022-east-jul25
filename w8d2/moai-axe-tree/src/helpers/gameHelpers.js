export const pickOppositeEmoji = (playerEmoji) => {
  const listOfEmojis = ["🌳", "🗿", "🪓"];

  if (!listOfEmojis.includes(playerEmoji)) {
    throw new Error("GIMME A VALID EMOJI DANGIT");
  }

  const winningCombinations = {
    "🗿": "🌳",
    "🪓": "🗿",
    "🌳": "🪓",
  };
  // const index = listOfEmojis.indexOf(playerEmoji);
  // return listOfEmojis[(index + 1) % 3];
  return winningCombinations[playerEmoji];
};

export const pickRandomEmoji = (randomSeed) => {
  const generatedIndex = Math.abs(randomSeed) % 3;
  const listOfEmojis = ["🌳", "🗿", "🪓"];

  return listOfEmojis[generatedIndex];
};

export const determineWinner = (playerChoice, computerChoice) => {
  const listOfEmojis = ["🌳", "🗿", "🪓"];
  if (!listOfEmojis.includes(playerChoice) || !listOfEmojis.includes(computerChoice)) {
    throw new Error("OMG NO EMOJI");
  }

  const winningCombinations = {
    "🗿": "🌳",
    "🪓": "🗿",
    "🌳": "🪓",
  };

  if (playerChoice === computerChoice) {
    return "tie";
  }

  if (winningCombinations[playerChoice] === computerChoice) {
    return "computer";
  }

  return "player";
};
