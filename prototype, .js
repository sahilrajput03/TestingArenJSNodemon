let aa = [23, 3, 4, 234, 2, 34];
let str = "some string";
console.log("$aa.toString():-", aa.toString());
console.log('$aa.join(",")', aa.join(","), "\t\t// gives similar resutl like aa.toString()");
console.log("", Object.getPrototypeOf(aa));
console.log("", Object.getPrototypeOf(aa) == Array.prototype);
console.log("", Object.getPrototypeOf(str));
