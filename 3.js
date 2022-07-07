// sum of all numbers in an array

var num = [1,45,22,35,50];
function sum(t){
    var tot=0;
    for(let i=0;i<t.length;i++){
        tot = tot+t[i];
    }
   console.log(tot);
}
sum(num);
