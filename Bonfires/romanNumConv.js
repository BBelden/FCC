/*

Bonfire: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convert(num) {
  var rom='';
  while (num > 10){ num -=10;rom+='X';}
  if (num-9===0){ num-=9;rom+='IX'; }
  if (num-4===0){num-=4;rom+='IV';}
  while (num > 0)
  {
      if (num-5>=0){num-=5;rom+='V';continue;}
      num-=1;
      rom+='I';
  }
  
 return rom;
}

convert(36);

