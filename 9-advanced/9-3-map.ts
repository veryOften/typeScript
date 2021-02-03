{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "Car",
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  // ReadOnly
  const video: ReadOnly<Video> = {
    title: "hi",
    author: "santos",
  };

  // nullable
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };
}
