// Part 1: A palindrome is a sequence of characters that is the same backwards or forward.  Write a function that tests a string passed in for whether it is a palindrome or not, and returns true or false accordingly.
//A palindrome should be two or more characters long.
//Test strings:  aa, aba, zboba, zamanaplanacanalpanamaxbobx

//My code starts here


// var string = 'word';
// var splitString = string.split("");
// console.log(splitString);
// var reverseString = splitString.reverse();
// console.log(reverseString);
// console.log(reverseString.join(""));

var checkPalindrome = function (word) {
    if (word.length < 2) {
      // console.log('This word has less than 2 characters')
      return false
    }
  var reverse = word.split("").reverse().join("");
    if (reverse === word) {
      return true
    }
    else {
      return false
    }
};

console.log(checkPalindrome('a'));
console.log(checkPalindrome('aa'));
console.log(checkPalindrome('aba'));
console.log(checkPalindrome('zboba'));
console.log(checkPalindrome('zamanaplanacanalpanamaxbobx'));


//---------------------------------------------------------------------------------------------
//Part 2: Write a function that finds and returns all the palindrome(s) in a string. 
//The input string 'momyyydad' should produce this array of strings ['mom', 'yy', 'yyy', 'dad']

// var test = 'momyyydad'

//Make all possible strings that meet the requirements
var allStrings = function (string) {
  var wordArray = [];
  for (var i = 0; i < string.length; i++) {
      // console.log(test.substring(i));
      var temp = string.substring(i);
      wordArray.push(temp);
      
      for (var j = (temp.length-1); j >= 0; j--) {
        // console.log(j)
        // console.log(temp.substring(0,j));
        wordArray.push(temp.substring(0,j));
      }
  }
  return wordArray
}

//Test all possible strings for palindromeness, then add to array if so...
var validPalindromes = []
var findPalindromes = function (isIt) {
  var subString = allStrings(isIt);
  for (var r = 0; r < subString.length; r++) {
      // console.log('hey', subString[r])
    if (checkPalindrome(subString[r])) {
      // console.log('Push this please', subString[r])
        //The tabbing sucks in this code 
        //I need to check for duplicates here before pushing
        if (validPalindromes.indexOf(subString[r]) == -1) {
          validPalindromes.push(subString[r]);
        }
      }
  }
    return validPalindromes;
}

var finalTest = findPalindromes('momyyydad');
console.log('Final Test', finalTest);


// Hey Justin & Jon,
// I really enjoyed meeting you and learning about what you all are up to. I'm admittedly brewing ideas already on how to leverage the web to maybe answer some of the questions you guys have.
// Speaking of questions...I've been wrestling a bit with the question of salary.
// If I'm being candid, I'm targeting the $95k-$120k range with the aim of landing at - or north of  - $100k.  Does that sound reasonable from your perspective?
// I'd also like to stress that I'm open to other ranges because I'm so stoked about the potential of joining what your group is doing.
// I hope it's not to off color approaching you two directly with my quandary, and if you're not free to talk about it I totally understand. 
// Either way, Looking forward to my conversation with Alyson tomorrow! 