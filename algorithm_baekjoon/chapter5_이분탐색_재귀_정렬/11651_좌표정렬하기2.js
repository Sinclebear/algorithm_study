// https://www.acmicpc.net/problem/11651 좌표 정렬하기 2
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// For local test
// const input = ['5', '0 4', '1 2', '1 -1', '2 2', '3 3'];
const N = input.shift();
const coordsArr = [];

// 문자열을 다시 숫자 배열로 변환
for (let i = 0; i < N; i++) {
  coordsArr.push(input[i].split(" ").map((strNum) => parseInt(strNum)));
}

let results = "";
// coordsArr = [[0,4], [1,2], [1,-1], [2,2], [3,3]]
coordsArr.sort((a, b) => {
  // y가 같지 않으면 y에 대해 오름차순 정렬
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  // y가 같을 경우, x에 대해 오름차순 정렬
  return a[0] - b[0];
});

coordsArr.forEach((coords) => {
  results = results + `${coords[0]} ${coords[1]}\n`;
});

console.log(results);
