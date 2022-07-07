// Remove duplicate array

function removedup(arr){
    let result = [];
    for (let i=0; i < arr.length; i++){
        if (result.length === 0){
            result.push(arr[i]);
        }
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i])
        }
   }
   return result;
}

let arr1 = [1,2,3,3,2,1];

console.log(removedup(arr1));
