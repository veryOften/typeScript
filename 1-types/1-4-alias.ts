{
  /**
   * Type Aliases 😍
   */
  type Text = string;
  const name: Text = "santos";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "santos",
    age: 12,
  };

  /**
   *  Stirng Literal Types 😍
   *  쓰는 이유?...... -> Union쪽에서 자세하게 설명
   */
  type Name = "name";
  let santosName: Name;
  santosName = "name";
  type JSON = "json";
  let json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}
