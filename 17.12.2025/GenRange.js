class GenRange {
    constructor(start, end) {
        if (start > end) {
            throw new Error("Error");
        }

        this.start = start;
        this.end = end;
    }

    *[Symbol.iterator]() {
        while (this.start <= this.end) {
            yield {
                value: this.start++,
                done: this.start <= this.end ? false : true,
            };
        }
    }
}

const obj = new GenRange(3, 7);
for (let num of obj) {
    console.log(num);
}
