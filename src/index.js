module.exports = function check(str, bracketsConfig) {
  str = str.split(''); //
  for (var i = 0; i < str.length; i++) {
    for (var [current, next] of bracketsConfig) {
      if ( next === str[i+1] &&   current === str[i] ) {
        str.splice(i, 2);
        i -= 2;
      }
    }
  }
  return (str.length === 0);
}
