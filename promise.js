// new Promis()
// (resolve, reject) => {
//   delay
//   setTimeout(() => resolve("Selesai!"), 2000);
// }
// callback itu adalah parameter berupa function
let janji = new Promise((resolve, reject) => {
  // delay
  // simulasi ambil data dari server
  // proses ambil data
  setTimeout(() => resolve([1, 2, 3]), 1000);
  setTimeout(() => reject("Telat"), 5000);
});

() => 3

janji
  .then((resolve) => resolve)
  .then((result) => result.filter((number) => number % 2 === 1))
  .then((result) => console.log(result))
  .catch((reject) => reject);

