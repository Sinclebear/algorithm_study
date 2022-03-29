// https://www.acmicpc.net/problem/2805 백준 나무 자르기
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 첫 줄 제거 후 저장
const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

// input 들어온 값 숫자로 변경 후, 오름차순 정렬. 이진 탐색시 반드시 필요.
// console.log(input);
let trees = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// treeArr, height를 기준으로 합을 구하는 함수 sum
function sum(treeArr, height) {
  let sum = 0;
  for (let i = 0; i < treeArr.length; i++) {
    if (treeArr[i] >= height) {
      sum = sum + treeArr[i] - height; // 나무의 윗동을 sum에 더한다.
    }
  }
  return sum;
}

// 땅바닥에서, 나무 높이 사이의 최적으로 자르는 값 H를 이진 탐색으로 찾는다.

let left = 1; // 임의의 H값을 최소값 1로 설정
let right = trees[trees.length - 1] - 1 + 1; // treeArr의 마지막 값으로 임의의 H값의 최대를 설정
let answer = 0;

while (left <= right) {
  //
  let mid = parseInt((left + right) / 2); // mid는 H값을 의미. 최소H값+최대H값을 더해 중간 값으로 지정
  if (sum(trees, mid) >= M) {
    // 나무 윗동의 합이 문제 요구값 M을 넘은 경우
    left = mid + 1; // H값을 최대로 하기 위해, 최소 H값 left을 mid+1로 변경해 재시도.
    answer = mid;
  } else {
    // H 최대값을 mid 값에서 - 1 만큼 낮춰본다.
    right = mid - 1;
  }
}

console.log(answer);
