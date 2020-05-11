let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'.`);
};
Rabbit.prototype.chilli = 23;
Rabbit.prototype.cars = ["alto", "bajaj", "swift", "innova"];
let weirdRabbit = new Rabbit("weird"); //this way the new fucntion is created with prototype as Rabbit function.
console.log(
  "\n\n\n\n\n\n__________________logging starts here__________________"
);
weirdRabbit.speak("laughing");
// console.log(
//   "$Object.getPrototypeOf(Rabbit) == Function.prototype:-",
//   Object.getPrototypeOf(Rabbit) == Function.prototype
// );
console.log(
  "$Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype:-",
  Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype
);
console.log("$weirdRabbit.chilli:-", weirdRabbit.chilli);
console.log("$weirdRabbit.cars[3]:-", weirdRabbit.cars[2]);
console.log("$weirdRabbit.prototype:-", weirdRabbit.prototype);
console.log("$Rabbit.prototype:-", Rabbit.prototype);
console.log("$Rabbit.prototype.prototype:-", Rabbit.prototype.prototype);
console.log(
  '$["sahil","meenu","samamo"].prototype:-',
  ["sahil", "meenu", "samamo"].prototype
);
console.log(
  '$Object.getPrototypeOf(["sahil", "meenu", "samamo"]):-',
  Object.getPrototypeOf(["sahil", "meenu", "samamo"])
);
console.log(
  '$Object.getPrototypeOf(["sahil", "meenu", "samamo"]) == Array.prototype:-',
  Object.getPrototypeOf(["sahil", "meenu", "samamo"]) == Array.prototype
);
console.log(
  "$Object.getPrototypeOf(Array) == Object.getPrototypeOf(Function):-",
  Object.getPrototypeOf(Array) == Object.getPrototypeOf(Function)
);
console.log(
  "$Object.getPrototypeOf(Object) == Object.getPrototypeOf(Function):-",
  Object.getPrototypeOf(Object) == Object.getPrototypeOf(Function)
);
console.log("", Array.prototype);
console.log("", Function.prototype);
console.log("", Object.prototype);
console.log("", String.prototype);
