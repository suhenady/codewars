/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return [] */


function solution(nums){
  
    //if nums is null, return an empty array
  
    if (nums == null) {
      return [];
    }
    
    //if nums is true, sort array lowest to highest with sort function
    
      return nums.sort(function(a,b) {
      return a-b;
    });
    
  }