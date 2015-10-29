/*

Bonfire: Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/

function reverseString(str) {
  var revArr=[];
  for (var i=0; i<str.length; i++)
    {revArr[i]=str[str.length-1-i];}
  var rev = revArr.join();
  rev = rev.replace(/[^a-zA-Z\s]+/g,'');
  return rev;
}

reverseString('hello');

