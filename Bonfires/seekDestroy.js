/*

Bonfire: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

*/

function destroyer(arr) {
  var toRemove = [];
  
  for (var i = 1; i < arguments.length; i++) {
    toRemove.push(arguments[i]);
  }  
  return arr.filter(function(value) {
    return toRemove.indexOf(value) < 0;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

