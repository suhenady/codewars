/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
  
    //loop through array, apply Number method
    
    let convertedArray = x.map(x => Number(x));
    
    //sum numbers and return answer
    
    let sum = convertedArray.reduce((add, current) => add + current, 0);
    
    //return sum
    
    return sum
  }