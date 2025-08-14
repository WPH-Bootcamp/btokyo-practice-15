// Private Properties

class AkunBank {
  // enkapsulasi
  // private
  #saldo = 0;
  #nomorRekening = 0;
  #nama = null;

  constructor(nomorRekening, nama) {
    this.#nomorRekening = nomorRekening;
    this.#nama = nama;
  }

  transfer(nominal, akun) {
    // Bisa pake Validasi
    this.#saldo -= nominal;
    akun.saldoBertambah(nominal);
  }

  saldoBertambah(nominal) {
    this.#saldo += nominal;
  }

  // setter
  // menginput niai kedalam
  setor(uang) {
    this.#saldo += uang;
  }

  // getter
  // menampilkan nilai keluar
  lihatSaldo() {
    return this.#saldo;
  }
}

const akun = new AkunBank("123", "Fauzi");
const akun2 = new AkunBank("321", "Rizky");
akun.setor(500000);
console.log("awalnya akun 1 : " + akun.lihatSaldo()); // 500000
console.log("awalnya akun 2 : " + akun2.lihatSaldo()); // 500000
akun.transfer(100000, akun2);
console.log("setelah transfer akun 1 : " + akun.lihatSaldo());
console.log("setelah transfer akun 2 : " + akun2.lihatSaldo());
