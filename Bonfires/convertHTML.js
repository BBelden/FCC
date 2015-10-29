/*

Bonfire: Convert HTML Entities

Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

*/

function convert(str) {
  str = str.replace(/\&/g,"&amp;");
  str = str.replace(/</g,"&lt;");
  str = str.replace(/>/g,"&gt;");
  str = str.replace(/\'/g,"&apos;");
  str = str.replace(/\"/g,"&quot;");
  return str;
}

convert('Hamburgers < Pizza < Tacos');

