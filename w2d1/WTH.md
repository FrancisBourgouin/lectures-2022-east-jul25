# Tricky concepts & syntax

Framework vs Library

- Framework : Set of tools, that are to be used in a specific way
- Library : Tools to be used in any way (Helper functions)

- Mocha : Testing Framework
- Chai : Assertion Library (Assert / Should / Expect)

- TDD : Test Driven Development

# How to approach a problem

- Try to code a solution, and bruteforce it until it works
  Problem with that solution: Takes a long time, could go the wrong 'way', you will not understand

- Check in/out, pseudocode, code the solution
  Problem: We don't know what to test, it will take a long time to validate

```jsx
const createListOfNumbers = (maxNumber) => {
  // Create the output array
  const output = [];
  // ...
};
// In: number
// Out: list (array)

const multiplyByTwo = (value) => {
  // ...
};

// In: number
// Out: number

multiplyByTwo(2);
multiplyByTwo(4);
multiplyByTwo(0);
```

- Check in/out, write cases, pseudocode, code the solution
