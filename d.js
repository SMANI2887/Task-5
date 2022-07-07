// Return all the prime numbers in an array


function prime(n){
  if(n<2)
  return `${n} is not a prime`

for(var i=2; i<n;i++){
if(n % i===0){
    return `${n} is not a prime number`
}
}
 return `${n} is a prime number`
}

console.log(prime(4)); 