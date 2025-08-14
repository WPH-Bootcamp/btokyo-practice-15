// OOP

// Inheritance
class Kendaraan {
  maju() {
    console.log("Kendaraan bergerak maju");
  }
}

class Mobil extends Kendaraan {
  warna = null;

  // Encapsulation
  // Setter
  setWarna(warna) {
    this.warna = warna;
  }

  // Getter
  getWarna() {
    return this.warna;
  }

  constructor(warna) {
    super();
    this.warna = warna;
  }

  klakson() {
    console.log("Tiiinnn!");
  }

  // Abstraction
  jalankanDekat(jarak) {
    return `Mobil ini sudah melaju sejauh ${jarak * 1} km`;
  }

  jalankanJauh(jarak) {
    return `Mobil ini sudah melaju sejauh ${jarak * 10} km`;
  }
}

class Motor extends Kendaraan {
  // Polymorphis
  maju() {
    console.log("Kendaraan bergerak maju tanpa macet");
  }
}

let honda = new Mobil("Merah");
honda.setWarna("Hijau");
console.log(honda.jalankanDekat(3));
console.log(honda.jalankanJauh(2));
let suzuki = new Motor();
suzuki.maju();
honda.maju();
honda.klakson();
