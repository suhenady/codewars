/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0. */

function howMuchILoveYou(nbPetals) {
  
  // set up an array of the phrases to be returned
  const phrase = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];
  
  // When the 2nd operand is larger than the first operand when using modulus, it will return the first operand. 
  // This will return the the value at the corresponding index in the array.
  
  return phrase[(nbPetals - 1) % phrase.length];
  }

