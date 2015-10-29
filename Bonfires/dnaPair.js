/*

Bonfire: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

function pair(str) {
  var at = ['A','T'];
  var ta = ['T','A'];
  var cg = ['C','G'];
  var gc = ['G','C'];
  var arr = [];
  for (var i=0;i<str.length;i++)
  {
     switch (str.charAt(i)) {
       case 'A' : arr.push(at); break;
       case 'C' : arr.push(cg); break;
       case 'G' : arr.push(gc); break;
       case 'T' : arr.push(ta); break;
     }
  }
 return arr;
}

pair("GCG");

