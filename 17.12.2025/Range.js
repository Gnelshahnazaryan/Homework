class Range {
    constructor(start, end) {
        if (start > end) {
            throw new Error("start must be lower then end");
        }

        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let current = this.start;

        return {
            next: () => {
                if (current <= this.end) {
                    return {
                        value: current++,
                        done: false,
                    };
                } else {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
            },
        };
    }
}

const obj = new Range(3, 7);

const it = obj[Symbol.iterator]();

for (let num of obj) {
    console.log(num);
}

for (let num of obj) {
    console.log(num);
}
