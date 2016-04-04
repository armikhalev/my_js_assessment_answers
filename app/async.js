exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    // it is the most basic implementation
    return new Promise(function(resolve, reject) {
      if (value.error) {
        reject(value.error);
      }
      else {
        resolve(value);
      }

    });
  },

  manipulateRemoteData : function(url) {
    // a handy jQuery factory function $.Deffered()
    var deferred = $.Deferred(), result = [], i, j;

    // another handy jQuery function to retrieve data
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {

        for (i in data) {
          for (j in data[i]) {
             result.push(data[i][j].name);
          }
        }

        deferred.resolve(result.sort());
      }
    });
    return deferred.promise();
  }
};
