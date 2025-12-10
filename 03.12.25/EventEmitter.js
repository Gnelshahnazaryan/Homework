const EventEmitterMixin = (Base) => class extends Base {

  constructor(...args) {

    super(...args);
    this._events = {};

  }


  on(event, listener) {

    if (!this._events[event]) {

      this._events[event] = [];

    }

    this._events[event].push(listener);

  }

  off(event, listener) {

    if (!this._events[event]) return;

    this._events[event] = this._events[event].filter(l => l !== listener);

  }

  emit(event, ...args) {

    if (!this._events[event]) return;

    for (const listener of this._events[event]) {

      listener(...args);

    }
  }
};



class Base{};

class MyEmitter extends EventEmitterMixin(Base) {}

console.log("=== TEST 1: on() must register listeners ===");
const e1 = new MyEmitter();
function a() {}
function b() {}
e1.on("start", a);
e1.on("start", b);
console.log(e1._events["start"].length === 2 ? "PASSED" : "FAILED");



console.log("\n=== TEST 2: emit() should call all listeners ===");
let counter = 0;
const e2 = new MyEmitter();
e2.on("ping", () => counter++);
e2.on("ping", () => counter += 2);

e2.emit("ping");

console.log(counter === 3 ? "PASSED" : "FAILED");  // 1 + 2 = 3



console.log("\n=== TEST 3: emit() passes arguments correctly ===");
const e3 = new MyEmitter();
let received = null;

e3.on("msg", (txt, num) => {
  received = txt + " " + num;
});

e3.emit("msg", "hello", 42);
console.log(received === "hello 42" ? "PASSED" : "FAILED");



console.log("\n=== TEST 4: off() should remove only target listener ===");
const e4 = new MyEmitter();
let c1 = 0, c2 = 0;

function l1() { c1++; }
function l2() { c2++; }

e4.on("evt", l1);
e4.on("evt", l2);

e4.off("evt", l1);  // remove only l1

e4.emit("evt");

console.log(c1 === 0 && c2 === 1 ? "PASSED" : "FAILED");



console.log("\n=== TEST 5: off() on non-existing event should not crash ===");
const e5 = new MyEmitter();
try {
  e5.off("nope", () => {});
  console.log("PASSED");
} catch {
  console.log("FAILED");
}



console.log("\n=== TEST 6: emit() on event with no listeners must not crash ===");
const e6 = new MyEmitter();
try {
  e6.emit("unknown");
  console.log("PASSED");
} catch {
  console.log("FAILED");
}



console.log("\n=== ALL TESTS COMPLETE ===");
