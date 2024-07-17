/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    obj = {
      toBe(b){
          if(val=== b){
              return true
          }else{
              throw ('Not Equal')
          }
      },
        notToBe (c){
            if(val !== c){
                return true
            }else{
                throw("Equal")
            }
        }
    }
    return obj
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */