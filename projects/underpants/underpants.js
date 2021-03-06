// This is the proper way to start a javascript library
(function() {
  
  // This makes the arguments variable behave the way we want it to and a few
  // other things. For more info: 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
  'use strict';

  // This allows us to use our "_" anywhere. In a web browser, properties of window
  // are available everywhere without having to type "window."
  /* global _ */
  window._ = {};

  /**
   * START OF OUR LIBRARY!
   * Implement each function below it's instructions
   */

  /** _.identity()
   * Arguments:
   *   1) Anything
   * Objectives:
   *   1) Returns <anything> unchanged
   * Examples:
   *   _.identity(5) === 5
   *   _.identity({a: "b"}) === {a: "b"}
   */
   _.identity = function(x){return x;};


  /** _.first()
   * Arguments:
   *   1) An array
   *   2) A number
   * Objectives:
   *   1) If <array> is not an array, return []
   *   2) If <number> is not given or not a number, return just the first element in <array>.
   *   3) Otherwise, return the first <number> items of <array>
   * Gotchas:
   *   1) What if <number> is negative?
   *   2) What if <number> is greater than <array>.length?
   * Examples:
   *   _.first(["a","b","c"], 2) -> ["a", "b"]
   *   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */
   
  // _.first = function(array, length){
  //   var newArray = [];
  //   if (!Array.isArray(array) || length === 0 || length < 0){
  //       return newArray;
  //   } else if (isNaN(length)){
  //       return array[0];
  //   } else if (length > array.length){
  //     for (var i = 0; i < array.length; i++){
  //       newArray.push(array[i]);
  //     }
  //   } else {
  //       for (var i = 0; i < length; i++){
  //       newArray.push(array[i]);
  //       } 
  //   }
  //   return newArray;
  // }
  
  _.first = function(arr, len){
    if(len === 0 || len < 0 || !Array.isArray(arr)){
      return [];
    }
    if(!len || len === undefined){
      return arr[0];
    }
    return arr.slice(0, len);
    }

  /** _.last()
   * Arguments:
   *   1) An array
   *   2) A number
   * Objectives:
   *   1) If <array> is not an array, return []
   *   2) If <number> is not given or not a number, return just the last element in <array>.
   *   3) Otherwise, return the last <number> items of <array>
   * Gotchas:
   *   1) What if <nubmer> is negative?
   *   2) What if <number> is greater than <array>.length?
    * Examples:
   *   _.last(["a","b","c"], 2) -> ["b","c"]
   *   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */
   
  // _.last = function(array, length){
  //   var newArray = [];
  //   if (!Array.isArray(array) || length === 0){
  //       return newArray;
  //   } else if (isNaN(length) || length <= 0){
  //       return array[array.length - 1];
  //   } else if (length > array.length){
  //     for (var i = 0; i < array.length; i++){
  //       newArray.push(array[i]);
  //     }
  //   } else {
  //       for (var i = (array.length - length); i < array.length; i++){
  //       newArray.push(array[i]);
  //       } 
  //   }
  //   return newArray;
  // }

  _.last = function (arr, len){
    if (len <= 0){
      return [];
    } else if (!len){
      return arr[arr.length - 1];
    }
    
    if (len > arr.length){
      len = arr.length;
    }
    return arr.slice(-len);
  }
  
  /** _.each()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) if <collection> is an array, call <function> once for each element
   *      with the arguments: 
   *         the element, it's index, <collection>
   *   2) if <collection> is an object, call <function> once for each property
   *      with the arguments:
   *         the property's value, it's key, <collection>
   * Gotchas:
   *   1) what if <function> is not a function?
   *   2) what if <collection> is not a collection?
    * Examples:
   *   _.each(["a","b","c"], function(e,i,a){ console.log(e}); 
   *      -> should log "a" "b" "c" to the console
   */
   
  _.each = function(coll, func){
    if(Array.isArray(coll)){
      for(var i = 0; i < coll.length; i++){
        func(coll[i], i, coll);
      }
    } else if (typeof coll === "object"){
      for(var key in coll){
        func(coll[key], key, coll);
      }
    }
      
  }

  /** _.indexOf()
   * Arguments:
   *   1) An array
   *   2) A value
   * Objectives:
   *   1) Return the index of <array> that is the first occurrence of <value>
   *   2) Return -1 if <value> is not in <array>
   *   3) Do not use [].indexOf()!
   * Gotchas:
   *   1) What if <array> has multiple occurances of val?
   *   2) What if <val> isn't in <array>?
    * Examples:
   *   _.indexOf(["a","b","c"], "c") -> 2
   *   _.indexOf(["a","b","c"], "d") -> -1
   */
  _.indexOf = function (arr, val){
    var indy = -1;
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === val){ 
        indy = i;
        break;
        }
      }
    return indy;
  }

  /** _.filter()
   * Arguments:
   *   1) An array
   *   2) A function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element, it's index, <array>
   *   2) return a new array of elements for which calling <function> returned true
   * Gotchas:
   *   1) What if <function> returned something other than true or false?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
   */
  _.filter = function(arr, func){
    var newArray = [];
    for(var i = 0; i < arr.length;  i++){
      if(func(arr[i], i, arr)){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }

  /** _reject()
   * Arguments:
   *   1) An array
   *   2) A function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element, it's index, <array>
   *   2) return a new array of elements for which calling <function> returned false
   * Gotchas:
   *   1) What if <function> returned something other than true or false?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
   * Extra Credit:
   *   Use _.filter in your implementation (this is actually pretty easy)
   */
   
  // _.reject = function(arr, func){
  //   var negater = function(value){
  //     return !func(value);
  //   }
  //   return _.filter(arr, negater);
  // }
  
  // _.reject = function(arr, func){
  //   var newArray = [];
  //     for(var i = 0; i < arr.length;  i++){
  //       if(!func(arr[i], i, arr[i])){
  //       newArray.push(arr[i]);
  //       }
  //     }
  //   return newArray;
  // }
  

  _.reject = function(arr, func){
    return _.filter(arr, function(value){
      return !func(value);
    })
  }
  
  /** _.unique()
   * Arguments:
   *   1) An array
   * Objectives:
   *   1) return a new array of all elements from <array> with duplicates removed
   * Examples:
   *   _.uniq([1,2,2,4,5,5,2]) -> [1,2,4,5]
   */
  _.uniq = function(arr){
      var newArray = [];
      for(var i = 0; i < arr.length; i++){
          if(_.indexOf(newArray, arr[i]) === -1){
            //passing in newArray to see if last pushed is already in newArray
            newArray.push(arr[i]);
          }      
      }
      return newArray;
  }

  /** _.map()
   * Arguments:
   *   1) An array
   *   2) a function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element
   *   2) save the return value of each <function> call in a new array
   *   3) return the new array
   * Gotchas:
   *   1) What if <function> is not a function?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
   */
   
  _.map = function(arr, func){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
      newArray.push(func(arr[i]));
    }
    return newArray;
  }

  /** _.pluck()
   * Arguments:
   *   1) An array of objects
   *   2) A property
   * Objectives:
   *   1) Return an array containing the value of <property> for every element in <array>
   * Gotchas:
   *   1) What if <property> is not given?
   *   2) What if <array> is not an array?
   *   3) What if one of the elements doesn't have <property>?
   * Examples:
   *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
   * Bonus:
   *   Use _.map in your implementation
   */
   
  // _.pluck = function(arr, prop){
  //   var newArray = [];
  //   for (var i = 0; i < arr.length; i++){
  //     newArray.push(arr[i][prop]);
  //     }
  //   return newArray;
  // }
   
   _.pluck = function(arr, prop){
     var mapper = function(element){
       return element[prop];
     }
     return _.map(arr, mapper);
  }

  /** _.reduce()
   * Arguments:
   *   1) An collection
   *   2) A function
   *   3) A seed
   * Objectives:
   *   1) Call <function> for every element in <collection> passing the arguments:
   *       if <collection> is an array:
   *         previous result, current element, current element's index
   *       if <collection> is an object
   *         previous result, current index, current value
   *   2) Use the return value of <function> as the "previous result"
   *      for the next iteration
   *   3) On the very first iteration, use <seed> as the "previous result"
   *   4) After the last iteration, return the return value of the final <function> call
   * Gotchas:
   *   1) What if no <seed> is given?
   * Examples:
   *   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
   */

  _.reduce = function(coll, func, seed){
     var i = 0;
     if(seed === undefined){
        seed = coll[0];
        i = 1;
     }
    if (Array.isArray(coll)){
      for (var i; i < coll.length;){
        var prevRes = func(seed, coll[i++], i);
        seed = prevRes;
      }
    }
    return seed;
  }  

  /** _.contains()
   * Arguments:
   *   1) An array
   *   2) A value
   * Objectives:
   *   1) Return true if <array> contains <value>
   *   2) Return false otherwise
   * Gotchas:
   *   1) did you use === ?
   *   2) What if <array> is not an array?
   *   3) What if no <value> is given?
   * Examples:
   *   _.contains([1,"two", 3.14], "two") -> true
   */
_.contains = function(arr, val){
  var valCheck = false;
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === val){
         valCheck = true;
      }
    }
    return valCheck;
  } 

  /** _.every()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) Call <function> for every element of <collection> with the paramaters:
   *      if <collection> is an array:
   *          current element, it's index, <collection>
   *      if <collection> is an object:
   *          current value, current key, <collection>
   *   2) If the return value of calling <function> for every element is true, return true
   *   3) If even one of them returns false, return false
   * Gotchas:
   *   1) what if <function> doesn't return a boolean
   * Examples:
   *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
   *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
   */
  _.every = function(coll, func){
    if(!func){
      func = _.identity;
    }
    if(Array.isArray(coll)){
      for(var i = 0; i < coll.length; i++){
         if(!func(coll[i], i, coll)){
           return false;
         };
        }
    }
    return true;
  }
   
  /** _.some()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) Call <function> for every element of <collection> with the paramaters:
   *       if <collection> is an array:
   *        current element, it's index, <collection>
   *       if <collection> is an object:
   *        current value, current key, <collection>
   *   2) If the return value of calling <function> is true for at least one element, return true
   *   3) If it is false for all elements, return false
   * Gotchas:
   *   1) what if <function> doesn't return a boolean
   * Examples:
   *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
   *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
   */
  _.some = function(coll, func){
    if(!func){
      func = _.identity;
    }
    if(Array.isArray(coll)){
      for(var i = 0; i < coll.length; i++){
         if(func(coll[i], i, coll)){
           return true;
         };
        }
    }
    return false;
  }

  /** _.extend()
  * Arguments:
  *   1) An Object
  *   2) An Object
  *   ...Possibly more objects
  * Objectives:
  *   1) Copy properties from <object 2> to <object 1>
  *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
  *   3) Return the update <object 1>
  * Examples:
  *   var data = {a:"one"};
  *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
  *   _.extend(data, {a:"two"}); -> data now equals {a:"one"}
  */
  _.extend = function (){
    for (var i = 1; i < arguments.length; i++){
      for (var prop in arguments[i]){
        arguments[0][prop] = arguments[i][prop];
      }
    }
    return arguments[0];
  }
  
// This is the proper way to end a javascript library
}());
