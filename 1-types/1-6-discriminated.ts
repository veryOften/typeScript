{
  // 😍 1-5 에 있는 코드보다 더 다은 코드
  type SuccessState1 = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState1 = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState1 | FailState1;
  function login1(id: string, password: string): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> 🎊 body
  // fail -> 😂 reason
  function printLoginState1(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎊 ${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
