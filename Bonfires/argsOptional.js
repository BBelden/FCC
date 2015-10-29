/*

Bonfire: Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function add() {
  var arg1 = add.arguments[0];
  for(var i = 0; i < add.arguments.length; i++)
  { 
    if(typeof add.arguments[i]!=="number"){ return undefined; } 
  }
  if(add.arguments.length<2)
  { 
    return function sum(n){ return add(n,arg1);}; 
  }
  else { return add.arguments[0] + add.arguments[1]; }
}

add(2);
