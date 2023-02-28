
/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9. */


function squareSum(numbers){
    //Take each number in the array, square it and store it in a variable
    
    let squaredNums = numbers.map(x => x * x);
    
    //Use new array of squared numbers and sum them. Return sum.
    
    return sum = squaredNums.reduce((a,b) => a + b, 0);
    
  }