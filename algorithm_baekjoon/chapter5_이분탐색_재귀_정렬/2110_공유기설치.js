// https://www.acmicpc.net/problem/2110 백준 공유기 설치
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 첫 줄 제거 후 저장
const [N, C] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

// input 들어온 값 숫자로 변경 후, 오름차순 정렬
let coords = input.map((v) => Number(v)).sort((a, b) => a - b);

// 좌표 배열, 거리 값을 기준으로 공유기 설치 가능한 집을 세는 count 함수
function count(coords, dist) {
  let endPosition = coords[0];
  let cnt = 1;

  for (let i = 0; i < coords.length; i++) {
    if (coords[i] - endPosition >= dist) {
      cnt++;
      endPosition = coords[i];
    }
  }

  return cnt;
}

// 인접한 두 공유기 사이의 Gap을 이진 탐색으로 찾는다.

let left = 1; // 임의의 최소 Gap 설정
let right = coords[coords.length - 1] - 1 + 1; // coords 배열의 가장 마지막 변수를 최대 Gap으로 설정
let answer = 0;

while (left <= right) {
  //
  let mid = parseInt((left + right) / 2); // mid는 Gap을 의미. 최소Gap+최대Gap을 더해 중간 값으로 지정
  if (count(coords, mid) >= C) {
    // C개 이상의 공유기를 설치할 수 있는 경우.
    left = mid + 1; // Gap을 최대로 하기 위해, 최소Gap 값을 mid+1로 변경해 재시도.
    answer = mid;
  } else {
    // C개 이상의 공유기를 설치할 수 없는 경우
    right = mid - 1;
  }
}

console.log(answer);
