// https://www.acmicpc.net/problem/11050 백준 이항 계수 1
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map((x) => +x);

// 이항 계수란, n개의 원소에서 k개의 원소를 순서없이 뽑아내는 경우의 수를 의미. 조합. Combination
// '이항' 은 하나의 아이템에 대해 '뽑거나, 안 뽑거나' 두 가지의 선택만이 있기 때문.
// nCk로 표기하며, 아래와 같은 연산을 수행한다.
// n*(n-1)*(n-2)* ... *(n-k)            n!
// ------------------------- = ----------------------  (단, 0 <= k <= n)
//             k!                 (n-k)! * k!

// // 풀이1. 팩토리얼을 직접 구현하여 풀이. Python 에서는 Math.factorial 함수가 있다.
// function factorial(number) {
//   result = 1;
//   for (let i = 2; i < number + 1; i++) {
//     result = result * i;
//   }
//   return result;
// }

// function bino_coef_factorial(n, k) {
//   return factorial(n) / factorial(k) / factorial(n - k);
// }

// console.log(bino_coef_factorial(n, k));

/************************************************************************* */
// // 풀이2. 이항 계수의 공식 사용하기 .. nCr = (n-1)Cr + (n-1)C(r-1)
// // n개의 원소 중 r개를 선택하는 경우의 수는,
// // n-1개의 원소 중 r개를 선택하는 경우의 수 + n-1개의 원소 중 r-1개를 선택하는 경우의 수
// // === 하나의 원소를 선택하는 경우의 수     + 하나의 원소를 선택하지 않는 경우의 수

function bino_coef(n, k) {
  // k가 n보다 큰 경우는 갯수가 0이다.
  if (k > n) {
    return 0;
  }

  // n개에서 0개를 선택하는 경우의 수와 n개에서 r개를 선택하는 경우의 수는 1이다.
  // 예) 3C3 = 3C0 = 1
  // 조합을 계속해서 나눠서, 1이 되는 값의 덧셈으로 나누는것
  if (k === 0 || k === n) return 1;

  let bino_coef_result = bino_coef(n - 1, k) + bino_coef(n - 1, k - 1);
  // nCk = (n-1)Ck + (n-1)C(k-1)
  return bino_coef_result;
}

console.log(bino_coef(n, k));

//                            5C2
//                4C2                +                4C1
//      3C2        +          3C1         +        3C1 + 3C0
// (2C2 + 2C1)     +      (2C1 + 2C0)     +    (2C1 + 2C0) + 3C0
// 2C2 + (1C1 + 1C0) + (1C1 + 1C0) + 2C0 + (1C1 + 1C0) + 2C0 + 3C0
// = 10
