// ////event loop
// console.log("Start");

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// console.log("End");

// //-----------------------------

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

////Prmises

// const cart = ["Shoes", "Pants", "Kurtas"];

// createOrder(cart, function () {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummery(paymentInfo, function () {
//       updateWalletBalence();
//     });
//   });
// });

// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummery(paymentInfo);
//   })
//   .then(function (data) {
//     return updateWalletBalence(data);
//   });

// const GITHUB_URL = "https://github.com/lalitmohanbindhani";

// const promise = fetch(GITHUB_URL);
// promise.then(function (data) {
//   console.log(data);
// });

////create our own Promise
// const cart = ["Shirt", "Pants", "Kurtas"];
// const promise = createOrder(cart);
// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     const orderId = 12345;
//     setTimeout(function () {
//       resolve(orderId);
//     }, 5000);
//   });

//   return pr;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// function validateCart(cart) {
//   if (cart.length > 0) {
//     return true;
//   }
// }

//-----------------------------------

////Async await

//async function always return a promise.
//there are two case, either it will return a promise
// or if we return a value let say string , boolean or
// number , then it will take this value and wrap it
// inside a promise a return a promise but the function
// will always a promise.

//async and await combo is used to handle promises.

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value");
//   }, 20000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value");
//   }, 40000);
// });

//await can only be used inside async function.
//js engine was waiting for promise to be resolved.

// async function handlePromise() {
//   console.log("Hello World");
//   const data = await p1;
//   console.log("Namaste Javascript");
//   console.log(data);

//   const data2 = await p2;
//   console.log("Namaste Javascript 2");
//   console.log(data2);
// }

// handlePromise();

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("Namaste Javascript");
// }

// getData();

// const GITHUB_API = "https://ap.github.com/users/lalitmohanbindhani";

// const getData = async () => {
//   try {
//     const data = await fetch(GITHUB_API);
//     const json = await data.json();
//     console.log(json);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getData();

////promise API
