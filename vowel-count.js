/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let vowelCount = 0;
    
    let string = str.toString();
    
    for (let i = 0; i <= str.length - 1; i++){
      if (string.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u")
        vowelCount += 1;
    }
    
    return vowelCount;
  }