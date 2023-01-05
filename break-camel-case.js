/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
  
  let splitString = string.split("");
  let newString = "";
  splitString.forEach (word => {
    if(word === word.toUpperCase()) newString +=" "+word;
    else newString += word;
  });
  
  return newString;
  
}
