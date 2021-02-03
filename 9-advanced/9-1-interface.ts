// interface는 규격사항 > 정해진 것을 토대로 서로간의 약속이 가능함 > LIKE 계약서
interface CoffeeMaker {
  coffeeBeans: number;
  makecoffee: (shots: number) => {};
}
class CoffeeMachine implements CoffeeMaker {
  coffeeBeans: number;
  makecoffee: (shots: number) => {};
}
// type은 어떠한 데이터를 담을 때 쓰임
type Position = {
  x: number;
  y: number;
};
const pos: Position = { x: 0, y: 0 };

// ----------------------------------------------------------------------------------------------

type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object (both)
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class (both)
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends (both)
type ZPositionType = PositionType & { z: number };
interface ZPositionInterface extends PositionInterface {
  z: number;
}

// only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // stirng
type NumberType = number;
type Direction = "left" | "right"; // union
