/**
 * Let's make a calculator 🧮
 */

type WayOfCal = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(way: WayOfCal, first: number, second: number): number {
  switch (way) {
    case "add":
      return first + second;
    case "substract":
      return first - second;
    case "multiply":
      return first * second;
    case "divide":
      return first / second;
    case "remainder":
      return first % second;
    default:
      throw Error("unknown error");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
