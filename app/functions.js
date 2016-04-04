exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function functionName(arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures : function(arr, fn) {
    var returned = [], get, i;
    // create closure that is using provided fn()
    // to retrieve later values from arr
    get = function(val){
      return  function() {
          return fn(val);
        }
      }
      // iterate through arr
      // get values by using closure
      for (i in arr){
        returned.push(get(arr[i]));
      }

      return returned;
  },

  partial : function(fn, str1, str2) {
    // uses underscore.js partial() function, the basic implementation
    return _.partial(fn, str1, str2);
  },

  useArguments : function() {
    var result = 0, i = 0, len = arguments.length;
    // arguments is an Array-like object
    // though call() can be used,
    // simple for loop might be enough in this case
    for (i, len; i < len; i++){
      result += arguments[i];
    }
    return result;
  },

  callIt : function(fn) {
    // arguments is an Array-like object
    // same as in useArguments(), though call() can be used,
    // for loop seems to be more explicit in this case
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = [], i = 1, len = arguments.length, rest;

    // get arguments
    for (i, len; i < len; i++) {
      args.push(arguments[i]);
    }
    // using partial return the rest of arguments
    return function() {
      return fn.apply(null, args.concat([].slice.call(arguments)));
    }

  },

  curryIt : function(fn) {
    // function collects and applies fn
    // to all the arguments when they are collected
    var getArgs = function(args, argsLen) {
      // currying function takes in current arg
      return function(cur) {
        // adds current arg to args until all args equal fn.length
        args.push(cur);
        // checks if all args collected and if yes applies fn()
        if (args.length === argsLen) {
          return fn.apply(null, args);
        }
        // otherwise recursively gets all the args
        else {
          return getArgs(args, argsLen);
        }
      }
    }
    // calls getArgs and returns its results
    return getArgs([], fn.length);
  }
};
