class Kucing {}
class Tikus {}
const tom = new Kucing();
const jerry = new Tikus();

console.log(typeof tom); // true
console.log(typeof jerry); // true
console.log(tom instanceof Kucing); // true
console.log(jerry instanceof Kucing); // true
