// Error State를 사용하는 것이 좋다.

{
  type NetworkErrorState = {
    result: "fail";
    resone: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error();
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // lohin ...
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
