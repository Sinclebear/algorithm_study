// https://www.acmicpc.net/problem/11399 백준 : ATM
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 돈을 인출할 사람 수 N       =   5
// 돈을 뽑는데 걸리는 시간 P(i):   P1 | P2 | P3 | P4 | P5
// 돈을 뽑는데 걸리는 시간 값  :    3 |  1 |  4 |  3 |  2

// 줄을 어떻게 서야 가장 적게 기다리고 뽑을수 있나? -> 그리디 알고리즘 문제.
// 선택의 순간마다 당장 눈앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법. 최적해 구하기.

// 참가자 index를 저장하는 배열 변수를 하나 지정하고, sort 돌리면 그에 맞춰서 순서를 바꿔준다.
// 숫자가 낮은 사람을 제일 앞으로 보내 먼저 탈출시켜 대기 시간 최소화.
// 낮은 시간 순으로 시간값 배열 저장. [1, 2, 3, 3, 4] 형태가 되도록.
// P2 = 1, P5 = 2, P1 = 3, P4 = 3, P3 = 4
// P2 = 1 = 1;
// P5 = 1+2 = 3;
// P1 = 1+2+3 = 6;
// P4 = 1+2+3+3 = 9;
// P3 = 1+2+3+3+4 = 13
// sum = 32

// 이것을 코드로 구현......

let peopleCount = Number(input[0]);
let raw_peopleTime = input[1];
let peopleTimeList = new Array();
peopleTimeList = raw_peopleTime.split(" ").map(Number); // split(" ").map(Number) 사용시, 내부 문자열 숫자값을 모두 숫자로 변환.

// console.log(peopleTimeList); // [ 3, 1, 4, 3, 2 ]

// peopleTimeList 정렬 하는 방법 #1 .. Math.min.apply 를 통해 최소값을 구해서, answerArray에 하나씩 넣는다.
let answerArray = new Array();
let ArrayLength = peopleTimeList.length;
function solution(arr) {
  for (let i = 0; i < ArrayLength; i++) {
    let minValue = Math.min.apply(null, arr);
    let [removed] = arr.splice(arr.indexOf(minValue), 1); // minValue 값의 인덱스 요소 제거 후 변수에 할당
    answerArray.push(removed);
  }
}
solution(peopleTimeList);

// // peopleTimeList 정렬 하는 방법 #2 .. 또는 sort 함수를 사용해서 정렬시킨다.
// let answerArray = peopleTimeList.sort((a, b) => a - b); //배열을 숫자형으로 변환한 후 오름차순 정렬
// console.log(answerArray);

let sum = 0;
let sumArray = new Array();

answerArray.forEach((element) => {
  sum = sum + element;
  sumArray.push(sum);
});

// console.log(sumArray); // [ 1, 3, 6, 9, 13 ]

console.log(
  sumArray.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
);
