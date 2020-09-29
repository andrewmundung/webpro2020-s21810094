// fungsi parameter
// const operasiPenjumlahan = (bilangan1, bilangan2) =>
//   {
//     const hasil =  bilangan1 + bilangan2;
//     return hasil;
//   };
//   const operasiPengurangan = (bilangan1, bilangan2) =>
//   {
//     const hasil =  bilangan1 - bilangan2;
//     return hasil;
//   };
//   console.log(operasiPenjumlahan(3, 4)); // Output: 7
//   console.log(operasiPengurangan(10,5)); // output: 5

// // 2. fungsi tidak parameter
// const namaJenisAnjing = () => 
//   {
//     const kucing = ["munchkin", "wild", "chinese"];
//     return kucing[Math.floor(Math.random()*(kucing.length))];
//   }
// const jenisKucing2 = () => 
//   {
//     const kucing = ["asian", "european", "australian"];
//     return kucing[Math.floor(Math.random()*(kucing.length))];
//   }
//   console.log(namaJenisKucing()); // Output:  (hasil random)
//   console.log(jenisKucing2()); // Output:  (hasil random)

// Arrow Function

//Single Argument
// const calcAge = (year) => {
//   return 2020 - year;
// }

// console.log(calcAge(1991));

//Multiple Argument
// const calcAge = (birthYear, currentYear) => {
//   return currentYear - birthYear;
// };

//No Argument with implicit return value
// const calcAge = () => 2020 - 1992;
// console.log(calcAge());

// const years = [1990, 1992, 2001, 2005];

// const calcAge5 = years.map(function (el)
// {
//   return 2020 - el;
// });

// const calcAge6 = years.map((el)) => 2020 - el);
// console.log(calcAge6)

//default parameter
const calcAge = (birthYear, currentYear) => currentYear - birthYear;
console.log(calcAge(1980, 2022));

//Exercise
//konvert menjadi es6
const yearUntilRetirement = (year, firstName) => {
  let age = 35;
  let retirement = 65 - age;
  if (retirement > 0) {
      console.log(firstName + " pensiun " + retirement + " years ");
  } else {
      console.log(firstName + " sudah pensiun.");
  }
  yearUntilRetirement(2000);
}