const assert = require("assert");
const drinkBeverage = require("../drinkBeverage");
const expect = require("chai").expect;

describe("Optimistic drinkBeverage", () => {
  it("Should return an object with a lower amount of liquid in currentVolume", () => {
    const inMugObject = {
      capacity: 330,
      currentVolume: 200,
      color: "white",
      material: "ceramic",
      content: "brown hot liquid",
      temp: 45,
    };
    const sipSize = 100;

    const result = drinkBeverage(inMugObject, sipSize);

    const outMugObject = {
      capacity: 330,
      currentVolume: 100,
      color: "white",
      material: "ceramic",
      content: "brown hot liquid",
      temp: 45,
    };

    expect(result).to.be.an("object");
    expect(result).to.deep.equal(outMugObject);
    // assert.deepEqual(result, outMugObject);

    // assert.equal(result.currentVolume, outMugObject.currentVolume);
    // Object.keys(result).length === Object.keys(outMugObject).length
    // for(const key of Object.keys(result)){
    //   result[key] === outMugObject[key]
    // }
  });
});

describe("Pessimistic drinkBeverage", () => {
  xit("should not modify the original object", () => {
    // ...
  });
  it("should keep the volume at 0 even if the sip is bigger than current volume", () => {
    const inMugObject = {
      capacity: 330,
      currentVolume: 200,
      color: "white",
      material: "ceramic",
      content: "brown hot liquid",
      temp: 45,
    };
    const sipSize = 9001;
    const result = drinkBeverage(inMugObject, sipSize);

    expect(result.currentVolume).to.equal(0);
  });
  it("should return an error message when trying to drink from an empty mug", () => {
    const inMugObject = {
      capacity: 330,
      currentVolume: 0,
      color: "white",
      material: "ceramic",
      content: "brown hot liquid",
      temp: 45,
    };
    const sipSize = 9001;
    const result = drinkBeverage(inMugObject, sipSize);

    expect(result).to.be.a("string");
    expect(result).to.equal("STOP TRYING TO DRINK FROM AN EMPTY MUG. REFILL IT.");
  });
  it("should return an error message when trying to take a negative sip", () => {
    const inMugObject = {
      capacity: 330,
      currentVolume: 100,
      color: "white",
      material: "ceramic",
      content: "brown hot liquid",
      temp: 45,
    };
    const sipSize = -9001;
    const result = drinkBeverage(inMugObject, sipSize);

    expect(result).to.be.a("string");
    expect(result).to.equal("DONT SPIT IN THE MUG EW.");
  });
  it("should return an error message when no mug object is provided", () => {
    const sipSize = 100;

    const result = drinkBeverage(undefined, sipSize);

    expect(result).to.be.a("string");
    expect(result).to.equal("NO MUG :("); // NO MUG === NO MUG
  });
  it("should return an error message when no sipSize is provided", () => {
    const inMugObject = {
      capacity: 330,
      currentVolume: 100,
      color: "white",
      material: "ceramic",
      content: "brown hot liquid",
      temp: 45,
    };

    const result = drinkBeverage(inMugObject, undefined);

    expect(result).to.be.a("string");
    expect(result).to.equal("NO SIP :(");
  });
});
