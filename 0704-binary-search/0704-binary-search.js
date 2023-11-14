/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let left = 0
    let rigth = nums.length - 1
    
    while (left <= rigth){
        let mid = Math.floor( (left + rigth )/2)
        let guess = nums[mid]
        if (guess === target) return mid
        if(guess > target){
               rigth = mid - 1 
        }else{
            left = mid + 1
        }
    }
    return -1

};