/*

Bonfire: Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

function bin(binNum){ return parseInt(binNum, 2); }
function asc(numRep){ return String.fromCharCode(numRep); }

function binaryAgent(str) {
  var arr=str.split(' ');
  arr = arr.map(bin);
  arr = arr.map(asc);
  arr = arr.join('');
  return arr;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');

