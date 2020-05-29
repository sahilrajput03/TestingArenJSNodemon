// amazing link - https://www.w3schools.com/js/js_scope.asp
let school = "fun";
// console.log(this); // This print empty object.
// console.log(window); // This gives error winodws is not defined.
function ssk() {
  carName = "suzuki";
}
ssk();
console.log("car --", carName);
// console.log(__filename); // Prints the file name
