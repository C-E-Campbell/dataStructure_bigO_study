class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  sayHello() {
    console.log(`Hi, I'm am ${this.name}`);
    return;
  }
}

class Guitarist extends Player {
  constructor(name, type) {
    super(name, type);
  }
  shred() {
    console.log(`I am ${this.name} the guitar player`);
  }
}

const charlie = new Guitarist('charlie', 'guy');
charlie.shred();
//test
