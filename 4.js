// Return all the palindromes in an array

let str1 = "madam";
function palindrome(str){
    return str === str.split('').reverse().join('');
    
}

console.log(palindrome(str1));
