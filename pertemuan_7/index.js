//Java script conditional

/* Menggunakan if, else if dan else
let hargaBuah = 10000;
if (hargaBuah > 8000){
    console.log("Mahal");
} else if (hargaBuah >= 5000 %% hargaBuah <= 8000) {
    console.log("Normal");
} else {
    console.log("Murah");
}
*/

/*Menggunakan Swtich dan Case
let makanan;
let waktu = "morning";
switch (waktu){
    case "morning":
        makanan = "Roti";
        break;
    case "day":
        makanan = "Nasi goreng";
        break;
    case "night":
        makanan = "Nasi campur";
        break;
    default:
        makanan = "Tidak makan";
}
console.log(makanan);
*/
// Javascript Loop
/* cara biasa
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/
/* Loop menggunakan For 
for(let i = 1; i <= 5; i++{
    console.log(i);
});
*/
/* For/in Loop
const lagu = {
    Judul : "goodbye days",
    Penyanyi : "yui",
    Tahun : 2012
};
for (x in lagu) {
    console.log(x, ':', lagu[x]);
}
*/
/* For/of Loop
const lagu = ["Dame dane", 
    "King and queen",  
    "all of me"
];
for (x of lagu){
    console.log(x);
}
*/
/*While Loop 
let x = 0;
while(x <= 10) {
    console.log(x)
    x++;
}
*/

/*Do While Loop
let i = 0;
do{
    console.log(i);
    i++;
} while ( i <= 10);
*/