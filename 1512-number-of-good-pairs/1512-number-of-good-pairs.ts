function numIdenticalPairs(nums: number[]): number {
let count = null

    for(let i= 0; i<nums.length; i++){
        for(let k = 1; k<nums.length; k++){
            if(nums[i]===nums[k] && i < k){
                count++
            }
        }
    }
    return count
};