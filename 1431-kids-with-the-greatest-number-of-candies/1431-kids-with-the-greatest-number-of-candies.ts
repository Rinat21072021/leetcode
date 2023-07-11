function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
let maxCandies = Math.max(...candies)
let arr = []
    for( let i = 0; i<candies.length; i++ ){
        if (extraCandies+candies[i]>=maxCandies ){
            arr.push(true)
        }else{
            arr.push(false)
        }    
    }
    return arr

};