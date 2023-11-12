/** product: calculate the product of an array of numbers. */

function product(nums) {

  // base case
  if (nums.length === 0){
    return 1}
  // normal case
  return nums[0] * product(nums.slice(1));
  }


/** longest: return the length of the longest word in an array of words. */


// longest(["hello", "hi", "hola"])  // 5
function longest(words) {

  let currentMax = "";

  // Base case
  if (words.length === 0) {
    return currentMax.length;
  }

  // Compare the length of the current word with currentMax
  if (words[0].length > currentMax.length) {
    currentMax = words[0];
  }

  // Make a recursive call and return its result
  return Math.max(currentMax.length, longest(words.slice(1)));

}

/** everyOther: return a string with every other letter. */

// ("hello")  // "hlo"
function everyOther(str) {

  let newWord = [];

  //base case
  if(str.length===0){
    return newWord.join("");
  }

  // check if it's odd
  if(str.length % 2 === 1){
    newWord.push(str[0]);
  }

  return(newWord + everyOther(str.slice(1)))

}

everyOther("Hello");

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  // base case
    if(str.length <=1){
      return true
    }
  // normal case
  if(str[0] !== str[str.length -1]){
    return false;
  }
    
  return (isPalindrome(str.slice(1, str.length-1)))
  
}

isPalindrome("tacocat")  // true
isPalindrome("tacodog")  // false


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  // base case
  if(arr.length === 0){
    return -1
  }

  // normal case
  let indexValue = 0

  if(val === arr[0]){
    return indexValue;
  }else{
    indexValue = indexValue + 1;
  }

  return (findIndex(arr.slice(1), val, indexValue))
}


let animals = ["duck","cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  // Base case
  if (str === '') {
    return str;
  }

  // Normal case
  let lastStr = str[str.length - 1];
  return lastStr + revString(str.slice(0, -1));

}

revString("hello") // 'olleh'


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];

  for (let key in obj){
    if(typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }

  return arr;
}

let obj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left =0, right = arr.length) {
 if(left > right){
  return -1;
 }

 let middle = Math.floor((right + left) / 2);
 if(arr[middle] === val){
  return middle;
 };

 if(arr[middle] > val){
  return binarySearch(arr, val, left = 0, right = middle -1);
 } 

 if(arr[middle] < val){
  return binarySearch(arr, val, left = mid + 1, right = arr.length);
 }

 return -1
} 

binarySearch([1,2,3,4],1) // 0
binarySearch([1,2,3,4],3) // 2
binarySearch([1,2,3,4],5) // -1

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
