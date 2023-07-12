function maximumWealth(accounts: number[][]): number {
let countArr:number[] = []

for (let i = 0; i<accounts.length; i++){
       let sum = 0
    
       if(Array.isArray(accounts[i])){
        sum = accounts[i].reduce((accum, item)=>accum + item,0)
        countArr.push(sum)
        }
    }
    
    let output = Math.max(...countArr)
    return output

};