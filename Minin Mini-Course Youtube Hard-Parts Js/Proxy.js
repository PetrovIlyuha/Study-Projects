// const person = {
//   name: "valentina",
//   age: 67,
//   job: 'Accountant'
// }

// const objectProxy = new Proxy(person, {
//   get(target, prop) {
//     console.log(`Getting prop ${prop}`); 
//     if (!(prop in target)) {
//       return prop
//             .split('_')
//             .map(p => target[p])
//             .join(' ');
//     }   
//     return target[prop]
//   },
//   set(target, prop, value) {
//     if (prop in target) {
//       target[prop] = value;
//     } else {
//       throw new Error(`No ${prop} field in target`);
//     }
//   },
//   has(target, prop) {
//     return ['age', 'name', 'job'].includes(prop)
//   },
//   deleteProperty(target, prop) {
//     console.log('Deleting ', prop);
//     delete target[prop];
//     return true;
//   }
// });

// // Functions
// const log = text => `Log: ${text}`;

// const fp = new Proxy(log, {
//   apply(target, thisArg, args) {
//     console.log('Calling fn...');

//     return target.apply(thisArg, args).toUpperCase();
//   }
// })

// // Classes
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log('Construct...')

//     return new Proxy(new target(...args), {
//       get(t, prop) {
//         console.log(`Getting prop "${prop}"`)
//         return t[prop];
//       }
//     })
//   }
// })

// const p = new PersonProxy('Max', 30);

// Wrapper
const withDefaultValue = (target, defaultValue = null) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

const position = withDefaultValue({
  x: 30,
  y: 40
}, 0);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
  })
}

const data = withHiddenProps({
  name: "Maaaaria",
  age: 24,
  _uid: '123565'
})

// Optimization
const userData = [
  {id: 1, name: 'Mario', job: 'Recruiter', age: 30 },
  {id: 2, name: 'Dario', job: 'Clean master', age: 42 },
  {id: 3, name: 'Vario', job: 'CEO', age: 36 },
  {id: 4, name: 'Zario', job: 'PR service', age: 23 },
]

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach(item => index[item.id] = item);
    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return item => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          case 'findById': return id => index[id]
          default: return arr[prop]
        }
      }
    })
  }
})

const users = new IndexedArray(userData)