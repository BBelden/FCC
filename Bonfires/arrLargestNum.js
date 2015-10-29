/*

Bonfire: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.

*/

function largestOfFour(arr) {
  var newArr = [];
  for (var i = 0; i<4; i++)
  {
    var max = 0;
    for (var j=0; j<4; j++)
    {
      if (max < arr[i][j]){max = arr[i][j];}
    }
    newArr.push(max);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

