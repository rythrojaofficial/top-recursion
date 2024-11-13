const n = 50;
const fibArray = [];
function fibonacci(num) {
  let lastNumber = 0;
  let secondLastNumber = 1;
  while (num > 1) {
    const fibNumber = lastNumber + secondLastNumber;
    fibArray.push(fibNumber);
    secondLastNumber = lastNumber;
    lastNumber = fibNumber;
    num--;
  }
}
fibonacci(n);
console.log(fibArray);
