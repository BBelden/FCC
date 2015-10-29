/*

Bonfire: Repeat a string repeat a string

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

*/

function repeat(str, num) {
  var str2='';
  if (num <0){return '';}
  for (var i=0; i<num; i++){str2=str2+str;}
  return str2;
}

repeat('abc', 3);

