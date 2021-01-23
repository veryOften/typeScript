{
  /**
   * Type Inference 😡
   *  타입이 뻔한 경우(특히 원시 타입)에는 타입스크립트가 자체적으로 예측함
   */
  let text = "Hello";
  // text = 1; // string 타입이라고 타입스크립트가 자동으로 예측 에러 발생

  function print(message = "Hello") {
    console.log(message);
  }
  print("hello");
  // print(1); // string 타입이라고 타입스크립트가 자동으로 예측 에러 발생

  function adds(x: number, y: number) {
    return x + y;
  }
  const result = adds(1, 2);

  // 결론적으로 타입 추론이라는 기능이 있지만, 타입은 정확하게 적어주는게 더 나은 코드라 생각됨.
  // 그 이유는 함수가 길어지거나 많아지게 되면 타입 추론이라는 기능은 아무런 효과를 거두지 못하기 때문임
}
