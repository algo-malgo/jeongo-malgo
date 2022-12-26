function solution(e, starts) {
    const answer = []
    const numTable = {}
    
    function splitNum(num) {
        divisors = []
        for(let i=1; i<parseInt(num**0.5)+1;i++){
            if (num%i === 0){
                if (parseInt(num/i) === i){
                    divisors.push(i)
                } else {
                    divisors.push(i)
                    divisors.push(parseInt(num/i))
                }

            }
                
        }
            
        return divisors
    }

    
    function getNumCount(num){
        numTable[num] = splitNum(num).length
        return numTable[num]
    }
        
        
    
    starts.forEach((num) =>{
        let counts = [10000000,0]
 
        for (let i=num;i<e+1;i++){
            if (i in numTable){
                if (counts[1] < numTable[i]){
                    counts[0] = i
                    counts[1] = numTable[i]
                } else if (counts[1] === numTable[i]) {
                    counts[0] = Math.min(counts[0],i)
                }
            } else {
                if (counts[1] < getNumCount(i)) {
                    counts[0] = i
                    counts[1] = getNumCount(i)
                } else if(counts[1] === getNumCount(i)) {
                    console.log(getNumCount(i), i, counts[1])
                    counts[0] = Math.min(counts[0],i)
                }
            }
                
        }
            
        answer.push(counts[0])
        console.log(counts)
        
    })
        
    return answer
}
    