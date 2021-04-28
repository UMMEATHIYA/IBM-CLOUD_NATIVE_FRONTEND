function reverseString(str) {
    var testString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        testString += str[i];
    }
    return testString;
}
module.exports.targetedreverseString=reverseString;