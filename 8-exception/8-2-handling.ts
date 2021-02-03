// Error handling 은 에러가 발생했을 때 처리할 수 있는 곳에 코드를 쓰는 것이 중요

class TimeoutError extends Error {}
class OffLineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new Error(`no network!!!`);
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
