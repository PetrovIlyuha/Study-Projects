const people = [
  {name: 'Пётр', age: 23, budget: 40000 },
  {name: 'Валерий', age: 22, budget: 30000 },
  {name: 'Марина', age: 17, budget: 70000 },
  {name: 'Александр', age: 27, budget: 60000 },
  {name: 'Виктор', age: 15, budget: 50000 },
]

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let person of people) {
//   console.log(person);
// }

// // * ForEach
// // people.forEach(person => console.table(person));

// // * Map
// const newPeople = people.map(person => person.name);
// // console.log(newPeople);

// // * Filter
// const alcoAge = people.filter(person => !(person.age < 18));

// // console.log(alcoAge);

// // * Reduce
// const totalBudget = people
//   .filter(person => person.budget >= 45000)
//   .reduce((total, person) => {
//   return total + person.budget
// }, 0);

// // console.log(totalBudget);

// // * Find
// const age22 = people.find(person => person.age === 22);
// console.log(age22)

// // * Find Index
// const age22Index = people.findIndex(person => person.age === 22);
// console.log(age22Index)

// Methods Combined
const newPeople = people
  .filter(person => person.budget >= 45000)
  .map(person => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget
    }
  })
  .reduce((total, person) => total + person.budget, 0)

  console.log(newPeople);