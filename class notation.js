class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
console.log("$typeof Rabbit:-", typeof Rabbit);
console.log("$typeof killerRabbit:-", typeof killerRabbit);
killerRabbit.speak("love");

let blackRabbit = new Rabbit("black");
blackRabbit.speak("awesomeee");

/* The class keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place. Any number of methods may be written inside the declaration’s braces. The one named constructor is treated specially. It provides the actual constructor function, which will be bound to the name Rabbit. The others are packaged into that constructor’s prototype. Thus, the earlier class declaration is equivalent to the constructor definition from the previous section. It just looks nicer.

Class declarations currently allow only methods—properties that hold functions—to be added to the prototype. This can be somewhat inconvenient when you want to save a non-function value in there. The next version of the language will probably improve this. For now, you can create such properties by directly manipulating the prototype after you’ve defined the class.

Like function, class can be used both in statements and in expressions. When used as an expression, it doesn’t define a binding but just produces the constructor as a value. You are allowed to omit the class name in a class expression.

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
 */
