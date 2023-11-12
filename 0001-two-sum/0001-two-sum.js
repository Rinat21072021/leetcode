/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //nums = [3,2,4], target = 6
var twoSum = function(nums, target) {
    
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complect = target - nums[i];
      if (map.has(complect)) {
        return [map.get(complect), i];
      }
      map.set(nums[i], i)
    }
  
};