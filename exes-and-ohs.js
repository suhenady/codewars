/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {

    //create variables and set them equal to zero to keep a count for the amount of exes and ohs
    let xCount = 0;
    let oCount = 0;
    
    //use a for loop to run through the string
    for (let i = 0; i < str.length; i++) {
      
      
      //for each exe in the string, increment the xCount variable by 1
      if (str[i].toLowerCase() === "x") {
        xCount++;
      //for each oh in the string, increment the oCount variable by 1
      } else if (str[i].toLowerCase() === "o"){
        oCount++;
      }
    }
  
    //create a conditional that compares the xCount variable to the oCount variable and returns true if they are equal
    if (xCount == oCount) {
      return true
    } else {
      return false
    }
  }