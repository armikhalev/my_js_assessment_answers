exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var counter, time;

    counter = function() {
      // starts counting
      console.log(start++);
      // makes counting to stop at end
      if(start > end){
        clearInterval(time);
      };

    };
    // call fun counter to start
    counter();
    // needs var time to be able to clearInterval
    time = setInterval(counter, 100);

    // provides method to cancel counting
    return {
      cancel() {
        clearInterval(time);
      }
    };
  }
};
