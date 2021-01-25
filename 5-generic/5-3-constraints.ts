interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }

    workPullTime() {}
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }

    workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 😡
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

// 제네릭을 사용해 더욱 추상적인 타입으로 변경 😍
function payGood<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const santos = new FullTimeEmployee();
const mario = new PartTimeEmployee();

const santosAfterPayBad = payBad(santos);
const marioAfterPayBad = payBad(mario);

const santosAfterPay = payGood(santos);
const marioAfterPay = payGood(mario);

santosAfterPayBad.pay(); // Empoyee의 타입을 리턴하기 때문에 pay밖에 호출이 안되는 문제 발생 😡
santosAfterPay.workPullTime(); // 타입이 변경되어 기존 Class 내에 있는 함수 리턴 가능함 😍

// -------------------------------------------------------------------------------

const obj = {
    name: "santos",
    age: 20,
};

const obj2 = {
    animal: "dog",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getValue(obj, "name")); // santos
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // dog
