{
  // Array
  const fruits: string[] = ["🍅", "🍌"]; // 😍 > readOnly 를 쓰게 될 때 더 명시적으로 사용할 수 있기 때문
  const scores: Array<number> = [1, 3, 4]; // 🤨
  function printArray(fruits: readonly string[]) {
    // fruits.push()  -> 에러 발생
  }

  // Tuple -> interface, type alias, class
  // 배열이긴 배열인데, 서로 다른 타입의 데이터를 배열에 담을 수 있음
  // 🤨
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
