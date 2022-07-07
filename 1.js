// Print Odd number array only

let arr = [1,2,3,4,5,6,7,8,9,0];
odd(arr);
function odd(n){
    for(let i=2;i<n.length;i+=2)
    console.log(i);
}