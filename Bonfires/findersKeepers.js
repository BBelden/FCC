/*

Bonfire: Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

*/

function find(arr, func) {
  var num = 0;
  while (num<arr.length)
  {
    if (func(arr[num]) === true)
      return arr[num];
     num++;
  }

}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

