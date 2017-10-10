/**
 * returns the string with a space before any capital letter
 * converting joined "PascalCase" string into "Title Case" strings
 * A string that is already capitalized and has no
 * other capital letters will return unmodified
 * A string of all lower case will return unmodified
 * @method splitAtCaps
 * @extends String
 * @return {[String]} [the transformed string]
 */
String.prototype.splitAtCaps = function() {
  return this.replace(/([^A-Z]+)([A-Z]{1})/g, '$1 $2');
};
/**
 * takes a boolean value and returns a random affirmative
 * or negative expression depending on true or false
 * @method funnyBoolean
 * @extends Boolean
 * @return {[String]} [the positive or negative expression]
 */
Boolean.prototype.funnyBoolean = function() {
  var o = {
    "true": ["Yup", 'You betcha!!', 'No doubt', 'Of course', 'Yeah baby!', 'You know it!', 'I think so', 'Believe it!', 'For sure!', 'Naturally'],
    "false": ['Nope', 'Not At All', 'Of Course Not']
  };
  var yesno = o[this];
  var len = yesno.length - 1;
  return yesno[Math.round(Math.random() * len)];
};