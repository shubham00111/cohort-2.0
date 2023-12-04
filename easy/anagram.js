/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const map1 = new Map(),
    map2 = new Map();
  str1
    .toLowerCase()
    .split("")
    .forEach((e) => {
      if (map1.get(e)) {
        map1.set(e, map1.get(e) + 1);
      } else {
        map1.set(e, 1);
      }
    });

  str2
    .toLowerCase()
    .split("")
    .forEach((e) => {
      if (map2.get(e)) {
        map2.set(e, map2.get(e) + 1);
      } else {
        map2.set(e, 1);
      }
    });
  let isAnagram = true;

  for (let [key, value] of map1) {
    let map2Val = map2.get(key);
    if (map2Val !== value || (map2Val == undefined && !map2.hasKey(key))) {
      isAnagram = false;
    }
  }
  console.log(map1, map2);
  return isAnagram;
}

module.exports = isAnagram;
