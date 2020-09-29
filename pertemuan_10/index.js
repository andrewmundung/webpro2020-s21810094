//let var const
//contoh Var 
// var nama = "andrew"
// var nama = "mundung"
// console.log(nama);

//var mempunyai (func scope) dan mempunyai masalah ketika dipakai di program besar
// function tes ()
// {
//     for(var i=0; i<10; i++)
//     {
//         console.log(i);
//     }
// }
// tes()
// console.log(i);
// {
//  let ;
//  for(i=0; i<10; i++)
//  {
//      console.log(i);
//  }
// }
// console.log(i);

//2. Template literal ES 6

const orang = {
    namaAwal : "andrew",
    namaAkhir : "mundung", 
    age : 20
};
console.log ("hallo nama saya" +orang.namaAwal+ "" +orang.namaAkhir+ "umur saya adalah" +orang.age+ "tahun" )
console.log (`hallo nama saya ${orang.namaAwal} ${orang.namaAkhir} umur saya adalah ${orang.age}tahun`);