//Problem 2 - Ubah Huruf
//Bobby sedang berdiskusi dengan Pak Anton untuk membuat metode enkripsi khusus sehingga data penting
//mereka tidak mudah dibaca oleh orang lain. Dan Bobby menawarkan untuk membuat enkripsi standar dengan
//penerapan susunan alphabet sesuai mereka inginkan.

function ubahHuruf(sentence) {
  let outputString = ""; //buat nampung, ceritanya
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (/[A-Z]/.test(char)) {
      const newSentence = String.fromCharCode(
        ((char.charCodeAt(0) - 65 + 10) % 26) + 65
      );
      outputString += newSentence;
    } else {
      outputString += char;
    }
  }
  return outputString;
}
console.log(ubahHuruf("SEPULSA OKE"));
console.log(ubahHuruf("Y BELU OEK"));
