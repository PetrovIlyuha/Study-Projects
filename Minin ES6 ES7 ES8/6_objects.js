const cityField = "city";
const job = "party-maker";

const person = {
  age: 26,
  name: "Dick",
  job,
  [cityField]: "Panama",
  "origin-country": "New-Zealand",
  print: () => "Person",
  toString() {
    return Object.keys(this)
      .filter(key => key !== "toString")
      .map(key => this[key])
      .join(" ");
  }
};

console.log(person.toString());
console.log(person.print());
console.log(person);

// Methods
const first = { a: 1 };
const second = { b: 2 };

console.log(Object.is(20, 20));

const obj = Object.assign({}, first, second);
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
