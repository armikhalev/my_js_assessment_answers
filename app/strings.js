exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split(""), sliced_arr = arr.slice();

    // finds all the duplicates
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (sliced_arr[i + 1] === sliced_arr[i]) {
        results.push(sliced_arr[i]);
      }
    }

    // finds unique chars
    var uniq = '';
    for (var j = 0; j< str.length; j++) {
      if(results.indexOf( str[j] ) === -1){
        uniq += str[j];
      }
    }

    // find unique duplicates
    var ddd = '';
    for (var d = 0; d < results.length; d++){
      if (results[d - 1] !== results[d]) {
        ddd += results[d].repeat(amount);
      }
    }
    return uniq + ddd;
  },
  wordWrap: function(str, cols) {
    var all = "";

    var splited = str.split(" ");

    for(var i = 0; i < splited.length; i++){

      if(splited[i].length === 1 && splited[i+1].length > 1) {
        all += splited[i] + "\n";
      }
      else if(splited[i].length === 1){
        all += splited[i] + " ";
      }
      else{

        if(i != splited.length - 1){
          all += splited[i] + "\n";
        }
        else{
          all += splited[i];
        }
      }
    }
    return all;
  },
  reverseString: function(str) {
    var reverse = '';
    for (var i = str.length - 1; i >= 0; i--){
      reverse += str[i];
    }
    return reverse;
  }
};
// thanks God I did it!
