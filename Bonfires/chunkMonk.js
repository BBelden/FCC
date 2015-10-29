/*

Bonfire: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

*/

function chunk(arr, size) {
  var newArr = [];
  var tempArr = [];
  var j=0;
  for (var i=0; i<arr.length; i++)
    {

      tempArr.push(arr[i]);
      j++;
      if (j ===size){
        newArr.push(tempArr);
        j=0;
        tempArr=[];
      }
    }
  if (tempArr.length !== 0){newArr.push(tempArr);}
  
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);

