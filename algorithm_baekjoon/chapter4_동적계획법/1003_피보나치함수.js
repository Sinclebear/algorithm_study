// https://www.acmicpc.net/problem/1003 백준 피보나치 함수
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  //.split("\r\n");
  .split("\n");

// console.log(input);
const len = input.shift();
// console.log(len);

for (let i = 0; i < len; i++) {
  const n = input[i];

  const fibonacci = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= n; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }

  console.log(fibonacci[n].join(" "));
}
