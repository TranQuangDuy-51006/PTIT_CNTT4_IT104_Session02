function checkElement(arr, num) {
  for (let v of arr) {
    if (v === num) {
      return true;
    }
  }
  return false;
}

console.log(checkElement([1, 2, 3, 4, 5], 3));
console.log(checkElement([1, 2, 3, 4, 5], 6));
