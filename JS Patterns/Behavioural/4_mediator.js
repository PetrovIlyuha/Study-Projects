class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] != from) {
          this.users[key].receive(message, from);
        }
      })
    }
  }
}

const petr = new User('petr');
const Marina = new User('Marina');
const Alex = new User('Alex');

const room = new ChatRoom();

room.register(petr);
room.register(Marina);
room.register(Alex);
console.log(room);

Marina.send("hi", Alex);
Alex.send('What?', petr);