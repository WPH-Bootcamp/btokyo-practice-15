// new Promise((resolve, reject) => {
//   const result = fetch("https://jsonplaceholder.typicode.com/posts/1");
//   resolve(result);
// }).then((result) => console.log(result));

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts/1"),
  fetch("https://jsonplaceholder.typicode.com/posts/2")
]).then(results => console.log(results));
