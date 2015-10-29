/*

Bonfire: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

*/

function gcd(x,y) {
  if (!y) { return x;}
  return gcd(y, x%y);
}

function scm(x,y) {
  return x*y / gcd(x,y);
}

function smallestCommons(arr) {
  arr = arr.sort();
  var lcm=arr[1];
  for (var i=arr[0]; i<=arr[1]; i++){ lcm = scm(lcm,i); }
  return lcm;
}


smallestCommons([5,1]);

