const { exec, spawn } = require("child_process");
let current;
let critical = 18; // Battery level at which hibernates.
let repeatAfterActionFired = 1; //In minutes.
let generalCheckTimer = 3; // Check after every this time(in second).

async function somelife() {
  exec("WMIC PATH Win32_Battery Get EstimatedChargeRemaining", (err, stdout, stderr) => {
    current = stdout.slice(29);
    console.log("battery-", current);
    if (current > critical) {
      checkAndHibernate();
    } else {
      console.log(
        `Hibernation Fired, Next checkAndHibernate after ${repeatAfterActionFired} minutes.`
      );
      setTimeout(() => {
        checkAndHibernate();
      }, repeatAfterActionFired * 60 * 1_000);

      exec("shutdown /h");
      // exec()
    }
  });
}
const checkAndHibernate = () =>
  setTimeout(() => {
    somelife();
  }, generalCheckTimer * 1_000);
checkAndHibernate();
