const mobilLama = {
  merek: "Toyota",
  warna: "Merah",
  jumlahRoda: 4,
  nyalakan: () => {
    console.log(`${this.merek} berwarna ${this.warna} menyala!`);
  },
};
const mobilKedua = {
  merek: "Toyota",
  warna: "Merah",
  jumlahRoda: 4,
  nyalakan: () => {
    console.log(`${this.merek} berwarna ${this.warna} menyala!`);
  },
};

// Class / Blueprint
class Mobil {
  // property
  merek = null;
  warna = null;
  jumlahRoda = 0;

  // method
  constructor(merek, warna, jumlahRoda) {
    this.merek = merek;
    this.warna = warna;
    this.jumlahRoda = jumlahRoda;
  }

  catWarnaMobil(warna){
    this.warna = warna;
  }

  // method
  nyalakan() {
    // console.log(`${this.merek} berwarna ${this.warna} menyala!`);
    return `${this.merek} berwarna ${this.warna} menyala!`;
  }
}

const mobilPakai = new Mobil("Toyota", "Merah", 4);
console.log(mobilPakai.nyalakan());
mobilPakai.warna = 'Hijau';
mobilPakai.catWarnaMobil('Hijau');
console.log(mobilPakai.nyalakan());
// const mobilPakaiKedua = new Mobil("Suzuki", "Biru", 4);
// console.log(mobilPakaiKedua.nyalakan());

// const avanza = new Mobil("Toyota Avanza", "Hitam");
// avanza.nyalakan();
