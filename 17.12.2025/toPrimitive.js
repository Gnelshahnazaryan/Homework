class Money {
    constructor(money) {
        this.money = money;
    }

    [Symbol.toPrimitive](arg) {
        if (arg == "number") {
            return this.money;
        } else if (arg == "string") {
            return this.money + " USD";
        }
    }
}

const obj = new Money(1000);

console.log(String(obj));
console.log(Number(obj));
console.log(+obj);
