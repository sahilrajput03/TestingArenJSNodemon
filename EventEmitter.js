const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("yum ↓☼☼☼");
});

eventEmitter.emit("lunch");
eventEmitter.emit("lunch");
// These event emmiters are useful in doing cpu intensive tasks efficiently.
async function kashish() {
  await setTimeout(() => {
    console.log("hello from async taskkk...");
  }, 200);
}
kashish();

console.log("hello regular task...!!");
