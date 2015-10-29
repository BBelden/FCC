/*

Bonfire: Diff Two Arrays

Compare two arrays and return a new array with any items not found in both of the original arrays.

*/

function diff(arr1, arr2) {
  if (arr1.length === 0) {return arr2;}
  else if (arr2.length === 0) {return arr1;}
  var newArr = [];
  for (var i=0; i<arr1.length;i++) {newArr.push(arr1[i]);}
  for (var j=0; j<arr2.length;j++) {newArr.push(arr2[j]);}
  newArr.sort();
  for (var k=0; k<newArr.length;k++)
    {
      if (newArr[k] === newArr[k+1]){
        newArr.splice(k,2);
        k--;
      }
    }

  return newArr;
}

diff([], [2, 1, 3, 5]);

