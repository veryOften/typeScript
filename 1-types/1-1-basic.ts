{
  /**
   *  JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array .....
   */

  // number 😍
  const num: number = 0;

  // string 😍
  const str: string = "hello";

  // boolean 😍
  const boal: boolean = false;

  // undefined !!! 보통은 undefined 로 많이 사용
  let name: undefined; // 😡
  let age: number | undefined; // 😍
  age = undefined;
  age = 1;
  // 😍
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person1: null; // 😡
  let person: string | null; // 😍

  // unknown 😡
  let notSure: unknown;
  notSure = "he";
  notSure = true;

  // any 😡
  let anything: any;
  anything = 0;
  anything = "hello";

  // void 😍
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 😡

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }
  let neverEnding: never; // 😡

  // object
  let obj: object; // 😡
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "santos" });
  acceptSomeObject({ animal: "dog" });
}
