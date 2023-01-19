/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */


function findOdd(A) {
    //Set variable equal to zero for later checking odd vs even. 
    let count = 0
    
    //Start for loop less than array length for going through array.
    for (let i = 0; i < A.length; i++){
      
      //Set a second for loop to compare against the first for loop.
      for (let j = 0; j < A.length; j++) {
        
        //Compare values for A[i] to A[j] and add to count for respective value.
        if (A[i] == A[j]) {
        count++
        
        }
      }
      
      //Check the remainder of the count to see if its odd or even.
      if (count % 2 != 0){
        return A[i];
      }
    }
    
  }