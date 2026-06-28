class EvenNumber {
    static [Symbol.hasInstance](arg) {
        if (typeof arg == "number" && arg % 2 == 0) {
            return true;
        }

        return false;
    }
}

console.log(4 instanceof EvenNumber);
