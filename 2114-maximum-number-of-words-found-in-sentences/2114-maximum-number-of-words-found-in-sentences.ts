function mostWordsFound(sentences: string): number {
    let result = 0;
    let elemLength = 0;
    
    for (let i = 0; i<sentences.length; i++){
        elemLength = sentences[i].split(' ').length;
            
        if(result<elemLength) result = elemLength;
    }
     
    return result;
};