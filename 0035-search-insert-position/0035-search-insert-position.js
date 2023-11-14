/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//[1,3,5,6], target = 2
const searchInsert = function(nums, target) {
    let left = 0
    let rigth = nums.length - 1
    
    while(left <= rigth){
        let mid = Math.floor((left +rigth)/2)
        let guess = nums[mid]
        if ( guess === target ) return mid
       
        if ( guess > target){
            rigth = mid - 1
        }else{
            left = mid + 1
        }
    }
    return rigth + 1

};