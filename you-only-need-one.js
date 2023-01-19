/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */



function check(a, x) {
  
  // Use if/else statement to return true or false if .includes() method condition is met.
  if (a.includes(x)){
    return true;
  } else {
    return false
  }
}