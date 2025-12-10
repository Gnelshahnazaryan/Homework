class Logger{

	constructor(){

		if(new.target == Logger){

			throw new Error("Error");

		}


	}


	log(message){

		throw new Error("Override");

	}


	warn(message){

		throw new Error("Override");

	}


	error(message){
		
		throw new Error("Override");

	}


}



class ConsoleLogger extends Logger{

	constructor(){

		super();

	}


	log(message){

		console.log(`[LOG] ${message}`);

	}


	warn(message){

		console.log(`[WARN] ${message}`);

	}


	error(message){

		console.log(`[ERROR] ${message}`);

	}

}


class MemoryLogger extends Logger{

	constructor(){

		super();
		this.logs = [];

	}

	
	log(msg){

		this.logs.push({"type": "log",'message': msg});

	}

	warn(msg){

		this.logs.push({'type': 'warn','message' : msg});

	}


	
	error(msg){

		this.logs.push({'type': 'error','message' : msg});

	}

}



// --- TESTS ---

console.log("=== TEST 1: Logger abstract class instantiation must fail ===");
try {
  new Logger();
  console.log("FAILED: Logger should not be instantiated");
} catch (e) {
  console.log("PASSED:", e.message);
}



console.log("\n=== TEST 2: ConsoleLogger methods must not throw ===");
try {
  const c = new ConsoleLogger();
  c.log("hello");
  c.warn("warning");
  c.error("err msg");
  console.log("PASSED");
} catch (e) {
  console.log("FAILED:", e.message);
}



console.log("\n=== TEST 3: MemoryLogger instantiation and log container ===");
try {
  const m = new MemoryLogger();
  console.log(Array.isArray(m.logs) ? "PASSED" : "FAILED");
} catch (e) {
  console.log("FAILED:", e.message);
}



console.log("\n=== TEST 4: MemoryLogger log() pushes correct structure ===");
const m1 = new MemoryLogger();
m1.log("hello");
console.log(
  m1.logs.length === 1 &&
  m1.logs[0].type === "log" &&
  m1.logs[0].message === "hello"
  ? "PASSED"
  : "FAILED"
);



console.log("\n=== TEST 5: MemoryLogger warn() pushes correct structure ===");
m1.warn("be careful");
console.log(
  m1.logs.length === 2 &&
  m1.logs[1].type === "warn" &&
  m1.logs[1].message === "be careful"
  ? "PASSED"
  : "FAILED"
);



console.log("\n=== TEST 6: MemoryLogger error() pushes correct structure ===");
m1.error("fatal error");
console.log(
  m1.logs.length === 3 &&
  m1.logs[2].type === "error" &&
  m1.logs[2].message === "fatal error"
  ? "PASSED"
  : "FAILED"
);



console.log("\n=== TEST 7: Different MemoryLogger instances must not share logs ===");
const a = new MemoryLogger();
const b = new MemoryLogger();
a.log("one");
console.log(
  a.logs.length === 1 && b.logs.length === 0
  ? "PASSED"
  : "FAILED"
);



console.log("\n=== TESTS COMPLETE ===");

