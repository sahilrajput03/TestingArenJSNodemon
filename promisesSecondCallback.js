let what = false; // true will resolve with 687, false will reject with 786
let pa = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject(new Error("ibnbatuta"));
    console.log("Anthing here is executable!!");
  }, 1_000)
).catch((pinto) => console.log(pinto));
console.log("#pintu mama#");
pa.then(
  (resolvedVal) =>
    console.log("♥♥-Program is safely continuing.!! and returned with - ", resolvedVal),
  (rejectedVal) =>
    console.log("♣♣-Program is safely continuing.!! and returned with - ", rejectedVal)
);
