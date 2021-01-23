{
  /**
   * Type Assertions 😡
   * 확실한 상황에서 타입을 강요하는 것
   * 그러나 확실한 상황이 아닌 곳에서 사용을 하게 되었을 때 문제가 발생
   * ex) 타입이 문자열이라는 것을 리턴하는 것을 알고, 문자열 관련된 함수를 쓰고 싶을 때
   */

  // 확실한 상황일 때
  function jsStrFunc1(): any {
    return "hello";
  }
  const result1 = jsStrFunc1();
  (result1 as string).length; // 5
  (<string>result1).length; // 5

  // 확실한 상황이 아닐 때 😡
  function jsStrFunc2(): any {
    return 1;
  }
  const result2 = jsStrFunc2();
  (result2 as string).length; // undefined 😡
  (<string>result1).length; // undefined 😡

  const wrong: any = 5;
  (wrong as Array<number>).push(1); // error 발생 😡

  // 정말 정말 정말 리턴 값을 확실할 때 !사용
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2);
  const button = document.querySelector("class")!;
}
