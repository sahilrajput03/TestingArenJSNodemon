const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};
console.log("\n\n\n Logging here:-");

let obj1 = { a: 1, b: 2, c: { d: 3, e: 4, f: 5, g: { h: 6 } } };
let obj2 = { ...obj1 }; // creates shallow copy(1 lovel copy in properties(for both values and value of referenced objects(JUST 1 LEVEL) are actually copied).
delete obj1.c.d;
// console.log("", obj1);
// console.log("", obj2); // it is a shallow copy i.e., 1 level copy only, if objects are referenced in properties, this is useless.
// c property with all the elements are there but actually reference to obj1's deleted properties as they are alive.
console.log(obj1.c == obj2.c); // returns false as ... destructuring returns a shallow copy of properties.

let obj3 = { a: 1, b: 2, c: { d: 3, e: 4, f: 5, g: { h: 6 } } };
let obj4 = { ...obj3 }; // creates shallow copy(1 lovel copy).
// let obj4 = Object.assign({}, obj3); // creates shallow copy(1 lovel copy, if objects are referenced in properties, this is useless).
// let obj4 = deepCopyFunction(obj3)
delete obj3.c.f;
// console.log("", obj3); // we can't see the f property when shallow copied.
// console.log("", obj4); // we can't see the f property. when shallow copied. BUT we can when deep copied.
console.log(obj3.c === obj4.c); // returns false in deep copy as their values are copied.)
// console.log('', ...[1,2,2,3,4,25,3])
