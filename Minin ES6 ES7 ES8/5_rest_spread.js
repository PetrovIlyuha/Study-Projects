// Rest
// function average(a, ...args) {
//   return args.reduce((acc, item) => acc + item, 0) / args.length;
// }

// console.log(average(10, 20, 30, 40, 50, 11000));

// // Spread
// const array = [1, 2, 3, 5, 8, 13, 21, 34, 55];
// console.log(Math.max(...array));
// console.log(Math.max.apply(null, array));

// const fib = [1, ...array];
// console.log(fib);

// // Destructuring
// const array1 = [1, undefined, 3, 5, 8, 13];

// // const [a,b = 42,...c] = array1;
// const [a, , c] = array;
// console.log(a, c);

// Object
const address = {
  country: "Russia",
  city: "Moscow",
  street: "Moskovskaya",
  concat: function() {
    return `${this.country} ${this.city} ${this.street}`;
  }
};

// const {
//   city,
//   country,
//   street = "Timiryazevskaya",
//   concat: addressConcat
// } = address;
// console.log(addressConcat.call(address));

// console.log(address.concat());

const { city, ...rest } = address;
console.log(city);
console.log(rest);

const newAddress = { ...address, street: "Tverskaya" };

console.log(newAddress);
