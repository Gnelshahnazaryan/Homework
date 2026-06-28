class Collection {
    [Symbol.toStringTag] = "Collection";
}

const obj = {
    [Symbol.toStringTag]: "Collection",
};

console.log(obj.toString());
