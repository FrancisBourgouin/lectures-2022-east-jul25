import { pickOppositeEmoji, pickRandomEmoji, determineWinner } from "./gameHelpers";

describe("pickOppositeEmoji functionality", () => {
  it("Picks the opposite emoji", () => {
    const listOfEmojis = ["🗿", "🪓", "🌳"];

    const result1 = pickOppositeEmoji("🗿");
    const result2 = pickOppositeEmoji("🪓");
    const result3 = pickOppositeEmoji("🌳");

    const expectedResult1 = "🌳";
    const expectedResult2 = "🗿";
    const expectedResult3 = "🪓";

    expect(result1).toEqual(expectedResult1);
    expect(result2).toEqual(expectedResult2);
    expect(result3).toEqual(expectedResult3);
  });
  it("Throws an error when no emoji are provided", () => {
    const throwyFunction = () => pickOppositeEmoji();

    expect(throwyFunction).toThrow();
  });
  it("Throws an error when emoji not in the list", () => {
    const throwyFunction = () => pickOppositeEmoji("🥔");

    expect(throwyFunction).toThrow();
  });
});

describe("pickRandomEmoji functionality", () => {
  it("Pick a random emoji", () => {
    const seed1 = 5;
    const result1 = pickRandomEmoji(seed1);
    const expectedResult1 = "🪓";

    const seed2 = -11;
    const result2 = pickRandomEmoji(seed2);
    const expectedResult2 = "🪓";

    expect(result1).toEqual(expectedResult1);
    expect(result2).toEqual(expectedResult2);
  });
});

describe("determineWinner functionality", () => {
  it("returns player if the emoji of the player matches one of the patterns", () => {
    const result1 = determineWinner("🗿", "🗿");
    const expectedResult1 = "tie";

    const result2 = determineWinner("🗿", "🌳");
    const expectedResult2 = "computer";

    const result3 = determineWinner("🗿", "🪓");
    const expectedResult3 = "player";

    expect(result1).toEqual(expectedResult1);
    expect(result2).toEqual(expectedResult2);
    expect(result3).toEqual(expectedResult3);
  });
  it("throws an error if there are missing emojis", () => {
    const throwyFunction = () => determineWinner();

    expect(throwyFunction).toThrow();
  });
});
