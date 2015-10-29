/*

Bonfire: Slasher Flick

Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index

*/

function slasher(arr, howMany) {
  if (howMany >= arr.length){return [];}
  if (howMany <1){return arr;}
  arr = arr.slice(howMany,howMany.length);
  return arr;
}

slasher([1, 2, 3], 2);

