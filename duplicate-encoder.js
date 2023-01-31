/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */


function duplicateEncode(word){
    // make passed argument lowercase and split string into individual characters
    return word
      .toLowerCase()
      .split('')
      // map through split characters and run conditional for returning ( or ) and pushing into a new string
      .map(function(a, b, c){
           return c.indexOf(a) == c.lastIndexOf(a) ? "(" : ")";
           })
     // join characters and return new string 
      .join('');
}
