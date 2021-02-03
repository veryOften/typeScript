{
  const obj = {
    name: "santos",
  };
  obj.name; // santos
  obj["name"]; // santos

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // stirng type
  const text: Name = "hello";

  type Gender = Animal["gender"]; // "male" | "female"

  type Keys = keyof Animal; // name | age | gender
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "santos",
    gender: "male",
  };
}
