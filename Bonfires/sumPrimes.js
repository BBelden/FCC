/*

Bonfire: Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

*/

function isPrime3(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2===0) return (n==2);
 if (n%3===0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i===0)     return false;
  if (n%(i+2)===0) return false;
 }
 return true;
}

function sumPrimes(num) {
  var sum=0;
  for (var i=0; i<=num;i++)
  { 
    if (isPrime3(i)===true) {sum+=i;} 
  }
  return sum;
}

sumPrimes(10);

