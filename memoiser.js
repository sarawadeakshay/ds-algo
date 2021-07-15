function memoiser(cb, memo) {
  memo = memo || {};
  return function(n) {
    if (n in memo) {
      return memo[n]
    } else {
      let val = cb.call(null, n);
      memo[n] = val;
      return val;
    }
  }
}

function fib(n) {
  if (n < 2) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

console.log(memoiser(fib)(10));