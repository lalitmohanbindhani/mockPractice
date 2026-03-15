////event loop
console.log("Start");

setTimeout(function () {
  console.log("timer");
}, 5000);

console.log("End");

//-----------------------------

// console.log("Start");

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// fetch("https://api.netflix.com").then(function cbf() {
//   console.log("CB Netflix");
// });

// console.log("End");

////callback function

// function handleEvendListener() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function () {
//     console.log("Button Clicked", count++);
//   });
// }
// handleEvendListener();

//---------------------------

// setTimeout(function () {
//   console.log("Hello World");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
