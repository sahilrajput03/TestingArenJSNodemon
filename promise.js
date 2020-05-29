let what = true;
let pa = new Promise((resolve, reject) =>
  setTimeout(() => (what ? resolve(687) : reject(786)), 3_000)
);
// pa.then((j) => console.log("The value of j is ", j)).catch((r) =>
//   console.log("The value of r is ", r)
// );
let retunedValue = 29939;

function kaka() {
  return pa
    .then((j) => {
      console.log("Scope of then - ", retunedValue);
      retunedValue = j;
      console.log("Scope of then2 - ", retunedValue);
      return j;
    })
    .catch((r) => r);
}
// kaka().then((k) => console.log(k));
kaka().then(() => console.log("Scope of then3 - ", retunedValue, "Amazing..."));
console.log("First class - ", retunedValue);
