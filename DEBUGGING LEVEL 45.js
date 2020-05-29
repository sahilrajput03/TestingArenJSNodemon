let axios = require("axios");
// console.log({axios})
// axios.get("http://api.github.com/users/github").then((res) => console.log(res.data));
// axios.get("http://api.github.com/users/github").then((res) => console.log(res.data));
axios.get("http://www.google.com").then((res) => console.log(res.data)); // get the complete html webpage.
console.log("\n\n");
// axios.get("https://api.github.com/users/github").then((res) => console.log({ ...res.data }));
// axios.get("https://api.github.com/users/github").then((res) => console.log({res}));
let a = { b: { c: 10 } };
let d = { ...a.b }; // this
let p = { ...a.b.c }; // no preperties are inside a.b.c object, hence nothing is destructured.
// console.log("p", p); // this doen't print anything.
let e = { ...a.b }.c;
// console.log(d);
// console.log(e);
let car = { bat: { cat: { dog: 20 } } };
let tu = { ...car.bat.cat }; // #st1
// console.log(car.bat.cat); // #st2  this referes to an object, is not equal to st1 in any equality, as tu is shallow copy of it.
// console.log(tu);
