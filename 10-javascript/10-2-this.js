console.log(this); // window

function simpleFunc() {
  console.log(this);
}

window.simpleFunc(); // window

class Counter {
  count = 0;
  // 일반 함수 > 호출될 때 this가 결정
  increase = function () {
    console.log(this);
  };
  // 화살표 함수 > 선언될 때 this를 결정 😍
  decrese = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // Counter

const caller = counter.increase;
caller(); // undefined

// bind
const caller1 = counter.increase.bind(counter);
caller1(); // Counter

// no bind > 화살표 함수로 선언 되었기 때문에
const caller2 = counter.decrese;
caller2(); // Counter

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob

// --------------------------------------------------------------------------------------------------

// 글로벌 객체 : window, node
// 함수는 글로벌 객체에 등록, 변수는 글로벌 객체에 등록되지 않음 (var 키워드 제외)

// window, 즉 글로벌 객체에 등록
function helloWorld() {
  console.log("hello");
}
// window 객체에 등록되지 않음
const santos = "santos";
let mark = "mark";

window.helloWorld(); // hello
console.log(window.santos); // undefined
helloWorld(); // hello
console.log(santos); // santos
console.log(mark); // mark

// --------------------------------------------------------------
