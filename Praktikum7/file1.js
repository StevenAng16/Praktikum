var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

let asal = "indonesia";

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
//nama = b;
//console.log("asal diakses = " + asal);
console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

let perkenalan = (nama, a, b, asal) => {
    console.log(
        "perkenalan nama saya " + nama + " nomor urut " + a + 
         " sekarang sedang mengikuti " + b +
         " berasal dari " + asal
    );
}
    perkenalan( 'Budi' , 'kampus merdeka' , 'kampus merdeka' , 'indonesia' );