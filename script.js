// FOR OF ARRAY
// const MHS = [`Galih`, `Arizza`, `Candra`];

// for biasa
// for (let i = 0; i < MHS.length; i++) {
//   console.log(MHS[i]);
// }

// foreach
// MHS.forEach((i) => console.log(i));
// MHS.forEach((m, i) => console.log(`${m} Adalah mahasiswa ke-${i + 1}.`));

// for of uses
// for (const i of MHS) {
//   console.log(i);
// }

// FOR STRING
// const NAMA = `Galih`;
// for (const i of NAMA) {
//   console.log(i);
// }
// for (const [i, m] of MHS.entries()) {
//   console.log(`${m} Adalah mahasiswa ke-${i + 1}.`);
// }

// FOR NODELIST
// const MHS = document.querySelectorAll(".nama");

// for biasa
// for (let i = 0; i < MHS.length; i++) {
//   console.log(MHS[i].textContent);
// }

// foreach
// MHS.forEach((i) => console.log(i.textContent));

// for of
// for (const i of MHS) {
//   console.log(i.textContent);
// }

// FOR ARGUMENTS
// menggunakan reduce tidak bisa
// for biasa
// function kalkulasi() {
//   //   console.log(arguments); //untuk menangkap semua argument yang dikirim ketika function memiliki argument ksong
//   let JUMLAH = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     JUMLAH += arguments[i];
//   }
//   return JUMLAH;
// }

// tidak bisa menggunakan foreach

// for of
// function kalkulasi() {
//   //   console.log(arguments); //untuk menangkap semua argument yang dikirim ketika function memiliki argument ksong
//   let JUMLAH = 0;
//   for (const i of arguments) {
//     JUMLAH += i;
//   }
//   return JUMLAH;
// }

// console.log(kalkulasi(1, 2, 3, 4, 5));

// FOR IN
const MHS = {
  nama: `Galih Arizza`,
  umur: 30,
  email: `email@email.com`,
};

// mengambil propertynya saja
// for (i in MHS) {
//   console.log(i);
// }

// mengambil value dari property
for (i in MHS) {
  console.log(MHS[i]);
}
