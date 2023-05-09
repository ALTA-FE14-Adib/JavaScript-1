//Problem 1 - Play With Asterisk
//Buatlah sebuah program untuk mencetak segitiga asterisk seperti dibawah ini!

// function playWithAsterisk(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }
// playWithAsterisk(5);

function playWithAsterisk(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        row += " "; 
      } else {
        row += "* ";
      }
    }
    console.log(row);
  }
}
playWithAsterisk(5);
