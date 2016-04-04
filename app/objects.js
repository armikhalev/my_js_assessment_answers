exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    // call() has as its first param context
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var result = [], property;
    /*
     * According to the Mozilla documentation:
     * "If you only want to consider properties
     * attached to the object itself, and not its prototypes,
     * use getOwnPropertyNames or perform a hasOwnProperty check
     */
     for (property in obj) {
       if (obj.hasOwnProperty(property)) {
         result.push(property + ': ' + obj[property]);
       }
     }
     return result;
  }
};
