exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0, val = 0, len = arr.length;

    for (val, len; val < len; val++){
      sum += arr[val];
    }
    return sum;
  },

  remove : function(arr, item) {
    var removeItem, i = 0, len = arr.length, index = arr.indexOf(item);

    function removeItem(i) {
      return i !== item;
    }
    return arr.filter(removeItem);
  },

  removeWithoutCopy : function(arr, item) {
    var index = 0;

    while((index = arr.indexOf(item, index)) > -1){
      arr.splice(index, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(-1,1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0, i = 0, len = arr.length;

    for (i, len; i < len; i++){
      if (arr[i] === item){
        count ++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var result = [], i = 0, len = arr.length, sorted_arr = arr.sort();

    for (i, len; i < len; i++) {
      for (var j = 0; j < len; j++) {
        if (sorted_arr[i] == sorted_arr[j]) {
          sorted_arr.splice(j, 1);
        }
      }
    }
    return sorted_arr;
  },

  square : function(arr) {
    var i = 0, len = arr.length, result = [];

    for (i, len; i < len; i++) {
      result.push(Math.pow(arr[i], 2));
    }
    return result;
  },

  findAllOccurrences : function(arr, target) {
    var count = [], i = 0, len = arr.length;

    for (i, len; i < len; i++){
      if (arr[i] === target){
        count.push(i);
      }
    }
    return count;
  }
};
