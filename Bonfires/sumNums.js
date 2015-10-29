/*

Bonfire: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {
  var min, max,sum2,sum;
  if (arr[0] > arr[1]) {max = arr[0]; min=arr[1];}
  else {min=arr[0]; max=arr[1];}
  sum2 = min+max;
  sum=0;
  for (var i=min;i<=max;i++) {sum+=i;}
  return(sum2,sum);
}

sumAll([1, 4]);

