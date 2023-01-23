/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */


function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    
    // Set variable to hold the squareroot of passed sq argument.
    
    let squareRoot = Math.sqrt(sq)
    
    // Check if squareroot is an integer.
    
    if (Number.isInteger(squareRoot) === true) {
      
    // Return Math.pow(squareroot + 1)
      return Math.pow(squareRoot + 1, 2);
    } 
    
    // If no perfect squareroot, return -1. 
      else if (Number.isInteger(squareRoot) === false) {
     
        return -1;
      }
  }
