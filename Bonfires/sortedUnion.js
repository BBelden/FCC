/*

Bonfire: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/

function unite(arr1, arr2, arr3) {
  var newArr = [];
  for (var i=0; i<arr1.length; i++) { newArr.push(arr1[i]);}
  for (var j=0; j<arr2.length; j++) {
    if (newArr.indexOf(arr2[j]) === -1) {newArr.push(arr2[j]);}}
  for (var k=0; k<arr3.length; k++) {
    if (newArr.indexOf(arr3[k]) === -1) {newArr.push(arr3[k]);}}

  return newArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

