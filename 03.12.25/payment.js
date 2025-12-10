function implementsPaymentInterface(obj) {

  return typeof obj.pay === "function" &&
         typeof obj.refund === "function" &&
         typeof obj.getStatus === "function";

}



class Payment {

	constructor(){

		if(new.target == Payment){

			throw new Error("Error");

		}

		this.history = [];

	}


	pay(amount){

		throw new Error("Override");

	}


	refund(id){

		throw new Error("Override");

	}


	getStatus(id){

		throw new Error("Override");

	}

}


class PayPalPayment extends Payment {

	constructor(id){

		super();	
		this.id = id

	}


	pay(amount){

		let time = Date.now().toString();
		this.history.push({ time : amount});
		return `Paid ${amount}`;

	}

	refund(id){

		return `Refunded ${id}`;		

	}


	getStatus(id){

		return `Status of ${id}`;

	}

}


class StripPayment extends Payment{

	constructor(id){

		super();
		this.id = id;

	}


	pay(amount) {

		let time = Date.now().toString();
		this.history.push({ time : amount});
    	return `Paid ${amount}`;

  	}

  refund(id) {
    return `Refunded ${id}`;
  }

  getStatus(id) {
    return `Status of ${id}`;
  }

}

// --- Tests ---

console.log("=== TEST 1: Abstract class instantiation should fail ===");
try {
  new Payment();
  console.log("FAILED: Payment instantiated but should not");
} catch (e) {
  console.log("PASSED:", e.message);
}


console.log("\n=== TEST 2: PayPalPayment implements interface ===");
const paypal = new PayPalPayment("pp_1");

console.log("Interface check:", implementsPaymentInterface(paypal) ? "PASSED" : "FAILED");


console.log("\n=== TEST 3: StripPayment implements interface ===");
const strip = new StripPayment("st_1");

console.log("Interface check:", implementsPaymentInterface(strip) ? "PASSED" : "FAILED");


console.log("\n=== TEST 4: PayPalPayment pay() pushes to history ===");
const before = paypal.history.length;
paypal.pay(100);
const after = paypal.history.length;

console.log(after === before + 1 ? "PASSED" : "FAILED");


console.log("\n=== TEST 5: Method outputs ===");
console.log(paypal.pay(50) === "Paid 50" ? "PASSED pay()" : "FAILED pay()");
console.log(paypal.refund("A1") === "Refunded A1" ? "PASSED refund()" : "FAILED refund()");
console.log(paypal.getStatus("A1") === "Status of A1" ? "PASSED getStatus()" : "FAILED getStatus()");


console.log("\n=== TEST 6: StripPayment method outputs ===");
console.log(strip.pay(70) === "Paid 70" ? "PASSED pay()" : "FAILED pay()");
console.log(strip.refund("B1") === "Refunded B1" ? "PASSED refund()" : "FAILED refund()");
console.log(strip.getStatus("B1") === "Status of B1" ? "PASSED getStatus()" : "FAILED getStatus()");


console.log("\n=== TEST 7: History exists only in PayPalPayment ===");
console.log(Array.isArray(paypal.history) ? "PASSED PayPal history" : "FAILED PayPal history");
console.log(Array.isArray(strip.history) ? "PASSED Strip history" : "FAILED Strip history");


console.log("\n=== TEST 8: Instances do not share history ===");
paypal.pay(200);
const paypal2 = new PayPalPayment("pp_2");
console.log(paypal2.history.length === 0 ? "PASSED (independent history)" : "FAILED");


