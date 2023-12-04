/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(str) {
  return str.length === 1 && /^[a-zA-Z]+$/.test(str);
}

function isPalindrome(str) {
  str = str.toLowerCase();
  let start = 0,
    end = str.length - 1;
  while (start <= end) {
    while (str[start] === " " || (start <= end && !isAlphabet(str[start]))) {
      start++;
    }
    while (str[end] === " " || (start <= end && !isAlphabet(str[end]))) {
      end--;
    }

    if (start <= end && str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("race car"));

module.exports = isPalindrome;
