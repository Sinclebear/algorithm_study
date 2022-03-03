// 표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  [0].split(" ")

// console.log(input)

let forward = parseInt(input[0]); // 낮에 오르는 A미터
let backward = parseInt(input[1]); // 밤에 잠을 자는동안 미끄러지는 B미터
let height = parseInt(input[2]) // 정상의 높이
let day = 1; // 소요되는 날짜 수
// console.log(forward, backward, height, day)

// 아래는 시간 초과난다.
// while(true){
//   if((forward * day - backward * (day-1)) >= height){ // 높이와 같거나 크면 정상도달로 판단
//     // console.log(day * forward - day * (backward-1))
//     day++;
//     break;
//   }
//   day++;
// }

// 정상에 도착하면 밤에 미끄러지는 것은 계산하지 않아도 됨. (height - backward)
// 하루에 올라가는 양은 (forward - backward)
// 아래 나눗셈 결과가 딱 떨어지지 않는 경우가 정상에 도달한 것. 올림 처리하여 day로 저장
day = Math.ceil((height - backward) / (forward - backward));

console.log(day);