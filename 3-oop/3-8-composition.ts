// 상속의 문제점: 수직적으로 기능을 상속하기 때문에, 기능의 확장에서 불안한 요소가 존재, 만약 하더라도 구조가 복잡해질 가능성이 존재
// 이러한 문제를 해결하기 위해서 Composition이 등장
{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }

      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the mashine.....");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!!!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up....");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots....`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CheapMilksteamer {
    private steamMilk(): void {
      console.log("Steaming some milk....");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class CandySugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy...........");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class caffeLatteMachin extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkForther: CheapMilksteamer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkForther.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: CandySugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilksteamer,
      private sugar: CandySugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new caffeLatteMachin(16, "1", new CheapMilksteamer()),
    new SweetCoffeeMaker(16, new CandySugarMixer()),
    new SweetCaffeLatteMachine(
      16,
      new CheapMilksteamer(),
      new CandySugarMixer()
    ),
    new CoffeeMachine(16),
    new caffeLatteMachin(16, "1", new CheapMilksteamer()),
    new SweetCoffeeMaker(16, new CandySugarMixer()),
    new SweetCaffeLatteMachine(
      16,
      new CheapMilksteamer(),
      new CandySugarMixer()
    ),
  ];

  machines.forEach((machine) => {
    console.log("-----------------------------------------");
    machine.makeCoffee(1);
  });
}
