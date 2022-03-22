// https://www.acmicpc.net/problem/11053 백준 가장 긴 증가하는 부분 수열
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const len = Number(input[0]); // 6. 입력값 1번째 줄 6을 받아옴.
input.shift();
let numbers = input[0].split(" ").map((element) => Number(element));
// [10, 20, 10, 30, 20, 50]

const dp = new Array(len).fill(1); // 1로 채워진 dp 배열 선언. [1, 1, 1, 1, 1, 1]

for (let i = 1; i < len; i++) {
  const values = [1];
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      //   console.log(numbers[i], ">", numbers[j], "이므로 dp[", j, "]=", dp[j], "에 +1");
      values.push(dp[j] + 1);
    }
    //   console.log("t"); // 지정된 숫자 numbers[j] 보다 큰 경우가 있는지 체크
    // } else {
    //   console.log(numbers[i], "<=", numbers[j], "이므로 변동없음");
    // }
  }
  dp[i] = Math.max(...values);
}
console.log(Math.max(...dp));
