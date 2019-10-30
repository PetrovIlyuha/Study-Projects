function sum(a, b) {
  return a + b;
}

const cube = a => a ** 3;

console.log(cube(5));

setTimeout(() => console.log("After 1 second"), 1000);

// Context
function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: "Vladimir",
  age: 40,
  log: log,
  arrowLog: arrowLog,
  delayLog: function() {
    // rudimentary way to save context for inner functions
    const self = this;
    setTimeout(function() {
      console.log(self.name + " " + self.age);
    }, 400);
  }
};

const person1 = {
  name: "Marie",
  age: 34,
  log: log,
  arrowLog: arrowLog,
  delayLog: function() {
    // use lambda to preserve the this context bond
    setTimeout(() => console.log(this.name + " " + this.age), 400);
  }
};

person.delayLog();
person1.delayLog();
