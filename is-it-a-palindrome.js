/* Write a function that checks if a given string (case insensitive) is a palindrome.

 */


function isPalindrome(x) {
  
    let palindromeCheck = x.split("").reverse().join("")
    
    if (palindromeCheck.toLowerCase() === x.toLowerCase()){
      return true
      
    }else{
      return false
      
    }
  }