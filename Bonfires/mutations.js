/*

Bonfire: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

*/

Array.prototype.unique = function() {
    return this.reduce(function(accum, current) {
        if (accum.indexOf(current) < 0) {
            accum.push(current);
        }
        return accum;
    }, []);
};
function mutation(arr) {
  var a1 = arr[0].toLowerCase();
  var a2 = arr[1].toLowerCase();
  a1 = a1.split('');
  a2 = a2.split('');
  a1 = a1.sort();
  a2 = a2.sort();
  a1 = a1.unique();
  a2 = a2.unique();
  for (var i =0; i<a2.length;i++)
    {
      if (a1.indexOf(a2[i]) === -1)
        return false;
    }
  return true;
}

mutation(['Hello', 'HhelL']);

