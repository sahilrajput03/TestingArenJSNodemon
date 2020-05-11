let car = { suzuki: "alto", hyundai: "i10", ferrari: "Model Ferra" };
let carsWithToString = {
  suzuki: "alto",
  hyundai: "i10",
  ferrari: "Model Ferra",
  toString: 20,
};
let mars = "robots";
console.log(
  "\n\n\n\n\n\n\n\n\n\n__________________________________loggging here__________________________________\n"
);
console.log("$car:-", car);
console.log("$car[suzuki]:-", car[`suzuki`]);
console.log("$Object.keys(car):-", Object.keys(car));
console.log('$"suzuki" in car:-', "suzuki" in car);
console.log('$car.hasOwnProperty("suzuki"):-', car.hasOwnProperty("suzuki"));
console.log('$"toString" in car:-', "toString" in car);
console.log(
  '$car.hasOwnProperty("toString"):-',
  car.hasOwnProperty("toString")
);
console.log("$car.toString:-", car.toString);
console.log('$car["toString"]', car["toString"]);
console.log("$carsWithToString.toString:-", carsWithToString.toString);
console.log("$typeof (234).toString():-", typeof (234).toString());
console.log("$Object.keys(carsWithToString):-", Object.keys(carsWithToString));
console.log(
  '$car.has("suzuki"):-',
  "returns error: has in not a function in car"
);
console.log("\n");

let ages = new Map();
ages.set("Mohit", 20);
ages.set("Mandeep", 22);
console.log("$ages:-", ages);
console.log('$ages.get("Mohit"):-', `${ages.get("Mohit")}`);
console.log('$ages.has("Mohit"):-', ages.has("Mohit"));
console.log('$ages.has("toString"):-', ages.has("toString"));
console.log("\n");
console.log('$"Mohit" in ages:-', "Mohit" in ages);
console.log(
  "as 'in' is used check property in objects, it doesnt work with Map"
);
