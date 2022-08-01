# Drinking beverage function

Considering a beverage mug object, I want to be able to drink from the mug and lower the amount of beverage.

# In / Out

## In

```jsx
const mugObject = {
  capacity: 330,
  currentVolume: 200,
  color: "white",
  material: "ceramic",
  content: "brown hot liquid",
  temp: 45,
};
```

```jsx
const sipSize = 9001;
```

## Out

modified object depending on the sip

Objects are referenced: they can be mutated (immutable function or mutable function)

```jsx
const mugObject = {
  capacity: 330,
  currentVolume: 200,
  color: "white",
  material: "ceramic",
  content: "brown hot liquid",
  temp: 45,
};

interface Mug {
  capacity: Number;
}
```

# How

- Substracting sipSize to mugObject.currentVolume
-

# Test cases

## Optimistic

Considering a mug object with currentVolume of 200, and a sip size of 100, the new object should have currentVolume of 100.

```jsx
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
  currentVolume: 200,
  color: "white",
  material: "ceramic",
  content: "brown hot liquid",
  temp: 45,
};

result.currentVolume === outputMugObject.currentVolume;
// result === outMugObject cannot easily do this
```

## Pessimistic

- Should have a new object (stretch)
- Too big sip (9001), flat to zero instead of negative
- currentVolume is 0, youre empty, time for a refill
- negative sip is bad, NO BACKWASH
- no mug object, drink from mug!
