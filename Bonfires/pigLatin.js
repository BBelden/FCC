/*

Bonfire: Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

*/

function translate(str) {
  var first = str.charAt(0);
  if (/[aeiou]/.test(first))
    {
      return str + "way";
    }
  str = str.slice(1);

  str = str + first;
  first = str.charAt(0);
  if (/[aeiou]/.test(first))
    {
      return str + "ay";
    }
  str = str.slice(1);
  str = str + first + "ay";
 return str;
}

translate("consonant");

