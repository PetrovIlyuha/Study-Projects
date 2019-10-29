function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

userFunctions = {
  sayName: function() {
    console.log(`I'm ${this.name}`);
  },
  increment: function() {
    this.score + 10;
  }
};

const user1 = userCreator("Michael", 10);

function paidUserCreator(paidName, paidScore, accountBalance) {
  const newPaidUser = userCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function() {
    this.accountBalance;
  }
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator("Alice", 20, 200);
