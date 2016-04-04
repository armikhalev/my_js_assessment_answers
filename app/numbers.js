exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> bit - 1) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    // uses toString to convert number to binary in string format
    var biStr = (num >> 0).toString(2);
    // adds leading zeros
    while(biStr.length < 8) {
        biStr = "0" + biStr;
    }
    return biStr;
  },

  multiply: function(a, b) {
    // toFixed() keeps a specified number of decimals turning arg to string
    // plus sign in front of the expression converts it to number
    return +(a * b).toFixed(4);
  }
};
