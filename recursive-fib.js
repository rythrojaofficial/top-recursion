const n = 16;
const fibArray = [];

function fibonacci(num) {
  //   if first term starts with 0
  fibArray[0] = 0;
  if (num < 3) {
    fibArray[num] = 1;
    return 1;
  } else {
    const fibNumber = fibonacci(num - 1) + fibonacci(num - 2);
    fibArray[num] = fibNumber;
    return fibNumber;
  }
}

fibonacci(n);
console.log(fibArray);
