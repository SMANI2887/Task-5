function mediamofarr(arr1, arr2){
    var concat = arr1.concat(arr2);
    concat = concat.sort(function (a,b){return a-b});
    console.log(concat);
    var length = concat.length;

    if(length%2 == 1){
        console.log(concat[(length/2)-.5])
        return concat [(length/2)-.5]
    }else{
        console.log(concat[length/2]+concat[(length/2)-1])/2;
    }
}
arr1 = [1,3,5,7,9];
arr2 = [2,4,6,8,10];

mediamofarr(arr1, arr2)
