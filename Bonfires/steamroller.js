/*

Bonfire: Steamroller

Flatten a nested array. You must account for varying levels of nesting.

*/

function steamroller(arr) {
  var retArr = [];
  var flattened = function (arg) {
    if (!Array.isArray(arg)){ retArr.push(arg); } 
    else { for (var i=0;i<arg.length;i++){ flattened(arg[i]); } }
  };
  arr.forEach(flattened);
  return retArr;
}

