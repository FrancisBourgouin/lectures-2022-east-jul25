// Javascript Classes

// Array.isArray
// new Date()
// new Error()
// new Promise()

class Potato {
  constructor(name) {
    this.name = "Super " + name;
  }

  greet() {
    console.log("Hi, I am " + this.name);
  }

  throw(isBoiled) {
    console.log("HAAAAAAAAAAAAAA");

    console.log(isBoiled ? "SPLOUTCH" : "BONK");
  }
}

class SuperPotato extends Potato {
  constructor(name) {
    super(name);
  }

  throw() {
    console.log("HAAAAAAAAAA");
    console.log("Jk");

    console.log("*flies away*");
  }
}

const russett = new Potato("Russett");
const yukon = new Potato("Yukon Gold");

// console.log(russett);

russett.greet();
yukon.greet();

russett.throw(false);
russett.throw(true);

const myrna = new SuperPotato("Myrna");

myrna.throw();
