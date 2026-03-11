// Operator Logika AND (&&)
let a = true;
let b = false;
console.log("a && b:", a && b); // false

// Operator Logika OR (||)
console.log("a || b:", a || b); // true

// Operator Logika NOT (!)
console.log("!a:", !a); // false
console.log("!b:", !b); // true

// IF Statement
let nilai = 85;
if (nilai >= 80) {
    console.log("Nilai A");
} else if (nilai >= 70) {
    console.log("Nilai B");
} else if (nilai >= 60) {
    console.log("Nilai C");
} else {
    console.log("Nilai D");
}

// IF dengan operator logika
let umur = 20;
let punyaKTP = true;
if (umur >= 17 && punyaKTP) {
    console.log("Boleh membuat SIM");
}

// Ternary Operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status:", status);

// SWITCH Statement
let hari = 3;
switch (hari) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    case 7:
        console.log("Minggu");
        break;
    default:
        console.log("Hari tidak valid");
}

// SWITCH dengan multiple cases
let buah = "apel";
switch (buah) {
    case "apel":
    case "jeruk":
    case "mangga":
        console.log("Buah lokal");
        break;
    case "anggur":
    case "kiwi":
        console.log("Buah impor");
        break;
    default:
        console.log("Buah tidak dikenal");
}

// Nullish Coalescing Operator (??)
let nama = null;
let namaPengguna = nama ?? "Guest";
console.log("Nama pengguna:", namaPengguna);

// Optional Chaining (?.)
let user = { profile: { name: "John" } };
console.log("Nama:", user?.profile?.name);
console.log("Email:", user?.profile?.email); // undefined

// Logical Assignment Operators
let x = 0;
x ||= 10; // x = x || 10
console.log("x ||= 10:", x);

let y = 5;
y &&= 20; // y = y && 20
console.log("y &&= 20:", y);

let z = null;
z ??= 15; // z = z ?? 15
console.log("z ??= 15:", z);
