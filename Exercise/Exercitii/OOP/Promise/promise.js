// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve({ data: "John" });
//     } else {
//       reject("Operation failed");
//     }
//   }, 1000);
// });

// // Promise chaining
// myPromise
//   .then((result) => result.data)
//   .then((result) => console.log(result))
//   .catch((error) => console.log("Error", error));

// const fetchUserData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 12, name: "John" });
//     }, 1000);
//   });
// };

// const fetchUserPosts = (userId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 1) {
//         resolve(["Post 1", "Post 2", "Post 3"]);
//       } else {
//         // throw new Error("Error 404");
//         reject("Error 404");
//       }
//     }, 1000);
//   });
// };

// // const data = fetchUserData();
// // const posts = fetchUserPosts(data.id);

// fetchUserData()
//   .then((user) => {
//     console.log(user);
//     return fetchUserPosts(user.id);
//   })
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise1 = Promise.resolve(1);
// const promise2 = new Promise((resolve) =>
//     setTimeout(() => {
//         resolve(2);
//     }, 2000)
// );

// const promise3 = new Promise((resolve) =>
//     setTimeout(() => {
//         resolve(3);
//     }, 1000)
// );

// Promise.all([promise1, promise2, promise3])
//  .then((values) => {
//     console.log("All promises resolved:", values);
// })
// .catch((err) => {
//     console.log("One of the promises failed", err);
// });

// Promise.race([promise2, promise3]).then((result) => {
//     console.log("First promise to resolve:", result);
// });

// async function fetchData() {
//     const user = await fetchUserData();
//     console.log(user);
//     const posts = await fetchUserPosts(user.id);
//     console.log(posts);
// }

// fetchData();

// Practice Exercise
// Fetch data from PokeAPI
// 1. Fetch a random pokemon
// 2. Log the name of the pokemon
// 3. Log the height of the pokemon
// 4. Log the information about the evolutions

const id = Math.floor(Math.random() * 30);
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
const pokemon = await response.json();

console.log(pokemon.name);
console.log(pokemon.height);
