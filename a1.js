// Print Odd number array only for arrow function

let arr = [1,2,3,4,5,6,7,8,9];
const odd = (arr) => {
    if(arr%2 !==0){
     for(let i=1;i<=arr.length;i+=2)
    console.log(i);
   }
}
odd(arr);