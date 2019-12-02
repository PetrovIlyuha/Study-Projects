 function fib(n) {
   if (n <= 2) return 1;
   return fib(n-1) + fib(n-2);
 }

 console.time('Process fib40');
 console.log(fib(40));
 console.timeEnd('Ended Process fib40');