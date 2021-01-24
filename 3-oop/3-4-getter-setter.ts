{
  // Getter, setter
  class User {
    constructor(private firstName: string, private lastName: string) {}
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("smaller than 0");
      }
      this.internalAge = num;
    }
  }

  const user = new User("Steve", "Jobs");
  const user1 = new User("Santos", "Kim");
  user.age = 6;
  console.log(user1.fullName);
}
