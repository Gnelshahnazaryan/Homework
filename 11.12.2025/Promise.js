const STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
};

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        throw new TypeError("promise and x is refering same memory");
    }

    if (x !== null && (typeof x === "object" || typeof x === "function")) {
        let then = null;
        let called = false;

        try {
            then = x.then;
        } catch (err) {
            reject(err);
        }

        if (typeof then === "function") {
            try {
                then.call(
                    x,
                    (y) => {
                        if (called) return;
                        called = true;

                        resolvePromise(promise, y, resolve, reject);
                    },

                    (r) => {
                        if (called) return;
                        called = true;

                        reject(r);
                    },
                );
            } catch (err) {
                reject(err);
            }
        }
    }
}

class MyPromise {
    constructor(executor) {
        this.state = STATE.PENDING;
        this.value = null;
        this.reason = null;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if ((this.state = STATE.PENDING)) {
                this.state = STATE.FULFILLED;
                this.value = value;

                this.onFulfilledCallbacks.forEach((fn) => fn());

                this.onFulfilledCallbacks = [];
                this.onRejectedCallbacks = [];
            }
        };
        const reject = (reason) => {
            if ((this.state = STATE.PENDING)) {
                this.state = STATE.REJECTED;
                this.reason = reason;

                this.onRejectedCallbacks.forEach((fn) => fn());

                this.onRejectedCallbacks = [];
                this.onFulfilledCallbacks = [];
            }
        };

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled =
            typeof onFulfilled === "function" ? onFulfilled : (value) => value;
        onRejected =
            typeof onRejected === "function"
                ? onRejected
                : (reason) => {
                      throw reason;
                  };

        const promise = new MyPromise((resolve, reject) => {
            const handleFulfilled = () => {
                queueMicrotask(() => {
                    try {
                        const x = onFulfilled(this.value);

                        resolvePromise(promise, x, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                });
            };

            if (this.state == STATE.FULFILLED) {
                onFulfilled(this.value);
            } else if (this.state == STATE.REJECTED) {
                onRejected(this.reason);
            } else {
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectedCallbacks.push(onRejected);
            }
        });
    }
}

const p = new MyPromise((resolve, reject) => resolve(10));

console.log("A");
p.then(() => console.log("B"));
console.log("C");

console.log(p);
