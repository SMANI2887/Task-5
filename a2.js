// Convert all the strings to title caps in a string array arrow function

var Upstr = () => {
    var arr2 = ['manikandan','vino','shathana','shanjana'];
    for(let i=0;i<arr2.length;i++){
        arr2[i]=arr2[i].toUpperCase();
    }
console.log(arr2);
}
Upstr()