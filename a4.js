// Return all the palindromes in an array - (arrow function)

let str1 = "madam";

var palindrome = (str) => {
    return str === str.split('').reverse().join('');
    
}

console.log(palindrome(str1));
