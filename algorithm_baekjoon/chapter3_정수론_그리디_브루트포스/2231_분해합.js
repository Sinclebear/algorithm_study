// https://www.acmicpc.net/problem/2231 백준 : 분해합
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 어떤 자연수 M의 분해합이란, M과 M을 이루는 각 자릿수의 합을 의미 // (N->M)
// 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다.
// 245 + 2 + 4 + 5 = 256
// 이 때, 245(M)는 256(N)의 생성자가 된다.

// 자연수 M이 주어졌을때, M의 가장 작은 생성자 구하기. // (N->M)

const number = parseInt(input);
let result = 1;
let answer_flag = 0; // 생성자가 없는 경우를 구분하기 위한 flag값 0으로 설정.

// 분해합 구하는 함수 실행
function DigitGenerator() {
  // 주어진 입력값 number만큼 for문 수행
  for (let i = 1; i < number; i++) {
    result = i;

    const stringValue = i.toString(); // 자릿수 덧셈을 위해 문자열로 변경

    // String이 배열과 유사한점을 사용하여, String.length, String[j] 를 활용해 각 자릿수를 더한다.
    for (let j = 0; j < stringValue.length; j++) {
      result += parseInt(stringValue[j]);
    }

    // 생성자의 분해합이 주어진 값과 일치하는지 지속해서 체크
    if (result === number) {
      console.log(i); // 현재 만들어진 생성자 값 출력
      answer_flag = 1; // answer_flag 값 변경하여 마지막 부분에서 console.log(0) 실행한되도록 변경
      return;
    }
  }
}

DigitGenerator();
// 생성자가 없는 경우 0을 출력
if (answer_flag === 0) console.log(0);
