function rotateArray(arr, k){
    for(let i=0; i<k; i++){
        let temp = arr[0];
        for(let j=0; j<arr.length; j++){
            arr[i] = arr[i+1];
        }
        arr[arr.length - 1] = temp
    }
    return arr;
}


let arr = [1,2,3,4,5];
k=1;
console.log(rotateArray(arr, k))