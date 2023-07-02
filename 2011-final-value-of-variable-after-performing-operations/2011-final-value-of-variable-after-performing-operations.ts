function finalValueAfterOperations(operations: string[]): number {
    let x = 0

    for (let i = 0; i < operations.length; i++) {
        if ("--X" === operations[i] || "X--" === operations[i]) {
             x = x - 1
        } else if ("X++" === operations[i] || "++X" === operations[i]) {
             x += 1
        }
    }
    
    return x
};