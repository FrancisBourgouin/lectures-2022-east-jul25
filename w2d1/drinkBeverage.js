const drinkBeverage = (mug, sipSize) => {
  if (typeof mug !== "object") {
    return "NO MUG :(";
  }

  if (!sipSize && sipSize !== 0) {
    return "NO SIP :(";
  }

  if (sipSize < 0) {
    return "DONT SPIT IN THE MUG EW.";
  }

  if (mug.currentVolume === 0) {
    return "STOP TRYING TO DRINK FROM AN EMPTY MUG. REFILL IT.";
  }

  mug.currentVolume -= sipSize;
  if (mug.currentVolume < 0) {
    mug.currentVolume = 0;
  }
  return mug;
};

module.exports = drinkBeverage;
