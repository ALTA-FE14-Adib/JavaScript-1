//Problem 4 - Caesar Cipher
//Write a method that takes an integer 'offset' and a string. Produce a new string, where each letter is shifted by
//'offset'. You may assume that the string contains only lowecase letters and Spaces. When shifting "z" by three letters,
//wrap around the front of the alphabet to produce the letter "c".

function caesarCipher(offset, input) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      const geser = (index + offset) % alphabet.length;
      result += alphabet[geser];
    } else {
      result += char;
    }
  }
  return result;
}

console.log(caesarCipher(3, "abc"));
