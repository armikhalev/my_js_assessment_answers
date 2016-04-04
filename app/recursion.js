exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listFiles = [], dirs = [], getFiles;

    // create a recursive function to get files
    getFiles = function(_data) {
      // for convenience store _data.files into files
      // .files is property name in given data for files
      var i, files = _data.files;

      // collect directories using .dir property name
      dirs.push( _data.dir );

      for (i in files) {
        // checks if file is not directory by type of string
        if (typeof files[i] === 'string') {
          // checks if i is a file, not directories
          if (!dirName || dirs.indexOf(dirName) >= 0) {
            listFiles.push(files[i]);
          }
        // makes a recursive call
        } else {
          getFiles(files[i]);
        }
      }
      // empty directories to go into deeper level of directories
      dirs.pop();
    };
    // call function to get files first time
    getFiles(data);
    // finally return list of files
    return listFiles;

  },

  permute: function(arr) {
    var result = [], perm;
    // recursive function to collect all permutations
    perm = function(_arr, mutants) {
      var current, mutants = mutants || []; // mutants can be empty, then []
      var i = 0, len = _arr.length;

      for (i, len; i < len; i++) {
        // get a current val in arr
        current = _arr.splice(i, 1);
        // if empty arr get all the results
        if (_arr.length === 0) {
          result.push(mutants.concat(current));
        }
        // recursively get all values
        perm(_arr.slice(), mutants.concat(current));
        _arr.splice(i, 0, current[0]);
      }
      return result;
    }
    return perm(arr);
  },

  fibonacci: function(n) {
    var fibonacciIt = function(num) {
        if (num === 0) {
            return 0;
        } else if (num === 1) {
            return 1;
        } else {
            return fibonacciIt(num - 1) + fibonacciIt(num - 2);
        }
    }
    return fibonacciIt(n);
    // though it could be done with for loop and with caching
  },

  validParentheses: function(n) {

    var par = function(n) {
      var result = [], i = 0;

      for (i; i < n; i++) {
        var left = par(i), right = par(n - i - 1);

        for (var l = 0; l < left.length; l++){
          for (var r = 0; r < right.length; r++){
            result.push("(" + left[l] + ")" + right[r]);
          }
        }
      }
      if (n === 0) return [""];

      return result;
    }
    return par(n);
  }
};
