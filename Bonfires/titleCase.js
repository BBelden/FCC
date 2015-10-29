/*

Bonfire: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  str = str.toLowerCase();
  str = str.replace(/\w\S*/g, function(x){return x.charAt(0).toUpperCase() + x.substr(1);});
  return str;
}

titleCase("I'm a little tea pot");

