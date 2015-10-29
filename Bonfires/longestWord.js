/*

Bonfire: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWord(str) {
  strArr = str.split(' ');
  var longest =0;
  for (var i=0; i< strArr.length; i++)
    {
      if (strArr[i].length > longest){ longest = strArr[i].length;}
    }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

