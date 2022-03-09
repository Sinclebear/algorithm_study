// https://www.acmicpc.net/problem/1011 백준 Fly me to the Alpha Centauri

// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 시작지점 x ~ 도착지점 y 까지 사이의 거리 y-x
// 시작, 도착시에는 반드시 1광년씩만 움직여야함.
/**
 * y-x  (가는방법) (기계 작동 횟수)
 * 거리 턴별이동량 턴수
 * 1    1          1턴
 * 2    11         2턴 (+1증가)
 * 3    111        3턴 (+1증가)
 * 4    121        3턴
 * 5    1211       4턴 (+1증가)
 * 6    1221       4턴
 * 7    12211      5턴 (+1증가)
 * 8    12221      5턴
 * 9    12321      5턴
 * 10   123211     6턴 (+1증가)
 * 11   123221     6턴
 * 12   123321     6턴
 * 13   1233211    7턴 (+1증가)
 * 14   1233221    7턴
 * 15   1233321    7턴
 * 16   1234321    7턴
 * 17   12343211   8턴 (+1증가)
 * 18   12343221   8턴
 *
 * 1) y-x가 제곱수일 때.
 * y-x가 제곱수일 경우(1, 4, 9, 16) 자신의 제곱근까지 한 번에 갈 수 있는 이동량이 증가했다가 줄어든다.
 *
 * (y-x의 값이)
 *  1의 경우 : 1
 *  4의 경우 : 121
 *  9의 경우 : 12321
 * 16의 경우 : 1234321
 *
 * (자신의 제곱근) + (자신의 제곱근 - 1)이 총 기계 작동 횟수(턴)가 됨.
 * Math.sqrt(y-x) + Math.sqrt(y-x) - 1
 *
 *
 * 2) y-x가 제곱수가 아닐때.
 *
 */

let count = parseInt(input[0]); // 테스트 케이스 개수
let x; // 시작지점 x
let y; // 도착지점 y
let a;
let b;
let distance;

let answerArray = new Array();
let answer;
for (let i = 1; i <= count; i++) {
  input[i] = input[i].split(" "); // 공백을 기준으로, 테스트케이스 개수를 제외한 1번 배열 값부터 진행
  x = parseInt(input[i][0]);
  y = parseInt(input[i][1]);
  distance = y - x;

  // y-x : distance가 *제곱수인 경우,
  // (자신의 제곱근) + (자신의 제곱근 - 1)이 총 기계 작동 횟수(턴)가 됨.
  if (Math.sqrt(distance) % 1 === 0) {
    answer = 2 * Math.sqrt(distance) - 1;
  } else {
    // Math.pow(3, 2) -> 3을 2제곱하겠다. = 9
    // Math.ceil(7.1) -> 7.1에서 소수점 단위를 올림하겠다. = 8
    // Math.sqrt(16) -> 16에 루트를 씌우겠다. = 4
    a = Math.pow(Math.ceil(Math.sqrt(distance)), 2); // a는 y-x 보다 큰 제곱수
    b = Math.pow(Math.ceil(Math.sqrt(distance)) - 1, 2) + 1; // b는 y-x 보다 한 단계 아래의 제곱수

    // 중간값보다 distance가 크거나 같으면, 자신보다 큰 제곱수의 기계 작동횟수와 동일.
    if ((a + b) / 2 <= distance) {
      answer = 2 * Math.ceil(Math.sqrt(distance)) - 1;
    } else {
      // 중간값보다 distance가 작은 경우, 자신보다 작은 제곱수의 기계 작동횟수와 동일.
      answer = 2 * Math.ceil(Math.sqrt(distance)) - 2;
    }
  }
  answerArray.push(answer);
  console.log(answerArray[answerArray.length - 1]); // 배열의 값을 for문 마지막 부분에, push된 내용을 순차적으로 출력.
}
