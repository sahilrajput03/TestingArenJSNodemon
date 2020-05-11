let empty = {};
console.log("\n\n\n\n\n\n---logging-here----\n");
console.log("$empty.toString:-", empty.toString);
console.log("$empty.toString():-", empty.toString());
console.log(
  "$Object.getPrototypeOf({}) == Object.prototype:-",
  Object.getPrototypeOf({}) == Object.prototype
);
console.log(
  "$Object.getPrototypeOf(Object.prototype):-",
  Object.getPrototypeOf(Object.prototype),
  "\t\t so this means Object.prototype is the root of prototypes tree of all objects in javascript."
);
console.log(
  "$Object.getPrototypeOf(Math.max) == Function.prototype:-",
  Object.getPrototypeOf(Math.max) == Function.prototype
);
console.log(
  "$Object.getPrototypeOf(Function.prototype):-",
  Object.getPrototypeOf(Function.prototype)
);
console.log(
  "$Object.getPrototypeOf(Object.getPrototypeOf(Function.prototype)):-",
  Object.getPrototypeOf(Object.getPrototypeOf(Function.prototype))
);
// breakk
console.log("-------------");
console.log(
  "$Object.getPrototypeOf([]) == Array.prototype:-",
  Object.getPrototypeOf([]) == Array.prototype,
  "\t\t\tso this means all arrays derive proptotype from Array.prototype,\n\t\t\t\t\t\t\t\t\t like all fuctions derive prototye from Function.prototype"
);
// break
console.log("--------------");
// we can use Object.create with a specific prototype.
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'KILLER'
killerRabbit.speak("SKREEEE")