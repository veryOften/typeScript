const x = {};
const y = {};
// 동일한 Object의 _proto_를 상속

const array = [];
// Array의 _proto_를 상속 또한 Array는 Object의 _proto_를 상속

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  //   this.makeCoffe = (shots) => {
  //     console.log("making coffee...");
  //   };
}

// Prototype member level
CoffeeMachine.prototype.makeCoffe = (shot) => {
  console.log("making coffee...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffe(); // making coffee....
