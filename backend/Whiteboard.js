// WhiteBoard Interview

const funArr = (arr,nVal) =>{

    let nArr = Array(nVal);
    
    for (let i =0; i< nArr.length; i++ ){
        nArr[i] = -Infinity;
    }
    

    for(let i =0; i < arr.length; i++){
        let j = 0;           
        console.log(nArr);
        while(j < nArr.length){
            if(arr[i] > nArr[j]){
                let k = j;
                while(k <= nArr.length){
                    nArr[k] = nArr[k-1];
                }

                nArr[j]= arr[i];
            
                break;
            }
            j++;
            
        }
        
       
    }

    return nArr;
}

console.log(funArr([141,1,17,-7,-27,18,541,8,7,7],3))