// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve(`It worked`);
//   }
// }); //10 minutes

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Hello from promise 2222");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Hello from promise 3333");
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "Hello from promise 4444");
// });

// Promise.all((promise, promise2, promise3, promise4)).then((values) => {
//   console.log(values);
// });

// const promise = new Promise((resolve, reject) => {
//   if(true) {
//     resolve('It worked');
//   }
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Hello from promise 2222");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Hello from promise 33333");
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "Hello from promise 44444");
// });

// Promise.all([promise, promise2, promise3, promise4])
//   .then(values => {
//     console.log(values);
//   })

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/albums",
//   "https://jsonplaceholder.typicode.com/posts",
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((response) => response.json());
//   })
// ).then((results) => {
//   console.log(results[0]);
//   console.log(results[1]);
//   console.log(results[2]);
// });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((response) => console.log(response));

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

fetchUsers();

// Recursive vs loop

function doSomething(n) {
  if (n === 0) {
    // base condition
    console.log("TASK COMPLETED");
    return;
  }
  console.log("I am doing something");
  doSomething(n - 1); // recursive call
}
doSomething(3);

// Recursive function

function findFactorial(num) {
  if (num === 0) return 1;
  let factorial = num * findFactorial(num - 1);
  return factorial;
}

findFactorial(5); // 120

// Loop function

function findFactorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

findFactorial(5);
