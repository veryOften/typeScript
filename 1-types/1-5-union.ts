{
  /**
   * Union Types: OR
   * 할당하고 싶은 값만 타입으로 지정해 씁니다. 타입스크립트에서 많이 사용됨
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  // 예시
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> 🎊 body
  // fail -> 😂 reason
  // 🤨
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎊 ${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
