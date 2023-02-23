/* Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john" */

function nameShuffler(str){
  //Split the names into an array
  const separateNames = str.split(' ')
  
  //Reverse the order
  let reversedNames = `${separateNames[1]} ${separateNames[0]}`
  
  //Return the reversed names
  return reversedNames
}