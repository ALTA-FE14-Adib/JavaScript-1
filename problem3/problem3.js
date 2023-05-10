//Problem 3 - Find Min and Max Number
//Buatlah sebuah program untuk mencari bilangan minimum dan maksimum dari sebuah array, dan di problem ini
//kamu tidak boleh melakukan pengurutan terhadap array, dan memunculkan index dari bilangan minimum dan
//maksimum tersebut.

function findMinAndMax(arr) {
  let min = arr[0];
  let max = arr[0];
  let indexForMin = 0;
  let indexForMax = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      indexForMin = i;
    } else if (arr[i] > max) {
      max = arr[i];
      indexForMax = i;
    }
  }
  //   console.log("min : ", min, "index : ", indexForMin);
  //   console.log("max : ", max, "index : ", indexForMax);
  return {
    min: min,
    index: indexForMin,
    max: max,
    index2: indexForMax,
  };
}
console.log(findMinAndMax([5, 7, 6, -2, -1, 8]));
console.log(findMinAndMax([5, 7, 34, 40, 21, 99, 4]));
