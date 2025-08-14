async function ambilData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

ambilData();

