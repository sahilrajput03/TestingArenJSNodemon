let what = true;
let pa = new Promise((resolve, reject) =>
  setTimeout(() => (what ? resolve(687) : reject(786)), 3_000)
);
pa.then((j) => console.log("The value of j is ", j)).catch((r) =>
  console.log("The value of r is ", r)
);
