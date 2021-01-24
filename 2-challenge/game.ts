/**
 * Let's make a game 🕹
 */
type Position = {
  x: number;
  y: number;
};

type Command = "up" | "down" | "left" | "right";

let position: Position = {
  x: 0,
  y: 0,
};

function moveUp(x: number, y: number) {
  position.x += x;
  position.y += y;
}

function moveDown(x: number, y: number) {
  position.x -= x;
  position.y -= y;
}

function move(command: Command) {
  switch (command) {
    case "up":
      return moveUp(0, 1);
    case "down":
      return moveDown(0, 1);
    case "left":
      return moveDown(1, 0);
    case "right":
      return moveUp(1, 0);
    default:
      throw new Error("unkown command");
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
