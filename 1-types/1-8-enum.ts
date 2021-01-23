{
  /**
   * Enum > 상수값
   * 😡
   *  Union을 사용하는 것을 추천
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNEDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNEDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfweek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Satarday"
    | "Sunday";

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Thursday);
  let day: Days = Days.Monday;
  day = 10; // 값을 바꿀 수 있기 때문에 Enum을 쓰는 것을 지양해야 한다. Union을 사용하는 것을 추천한다.

  let dayOfWeek: DaysOfweek = "Monday";
  dayOfWeek = "Wednesday";
}
