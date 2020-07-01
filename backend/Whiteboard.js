// WhiteBoard Interview

// const funArr = (arr,nVal) =>{

//     let nArr = Array(nVal);
    
//     for (let i =0; i< nArr.length; i++ ){
//         nArr[i] = -Infinity;
//     }
    

//     for(let i =0; i < arr.length; i++){
//         let j = 0;           
//         // console.log(nArr);
//         while(j < nArr.length){
//             if(arr[i] > nArr[j]){
//                 let k = j;
//                 while(k < nArr.length){
//                     nArr[k] = nArr[k-1];
//                 }
//                 nArr[j+1] = nArr[j]
//                 nArr[j]= arr[i];
                
            
//                 break;
//             }
//             j++;
            
//         }
        
       
//     }

//     return nArr;
// }

// console.log(funArr([141,1,17,-7,-27,18,541,8,7,7],3))


const openBrack =(str) => {

    if(str.length % 2 === 1) return false;
    let open = 0;
    
    for(let i; i < str.length; i++){
        if(str[i] === '['){
            open++;
        } else if (str[i] === ']'){
            open--;
        }

        if(open === -1){
            return false;
        }
    }

    if(open === 0){
        return true;
    }


}

// console.log(helloworld());
// console.log(goodbye());
// function helloworld() {
// return 'hello world';
// }
// const goodbye = () => 'goodbye';

const reverse = (str) => {

    let arrstr = str.split(' ');
    let newStr = '';

    arrstr.forEach(el => {
        newStr += reverseString(el) +" ";
    });

    return newStr.substring(0, newStr.length-1);

}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");



console.log(reverse('hello world'))