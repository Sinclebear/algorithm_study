// https://www.acmicpc.net/problem/1110 백준 더하기 싸이클
// 표준 입출력 구현
let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// // input = ['26']
// // 기존 코드 / 정수 <-> 문자열을 왔다갔다 하기 너무나도 귀찮다..
// // 문자열을 쓰려고 했던 이유는, 십의 자리 숫자 / 일의 자리 숫자를 전부 변수로 따로 할당하여 사용하려고 했기때문.
// // -> 주어진 수를 10으로 나눈 후, Math.floor (소숫점 버림) 함수를 쓰면 십의자리 수만 건져낼 수 있음.
// let new_input = new Array()

// if (parseInt(input) < 10){
//   new_input.push('0', input[0])
//   // console.log(new_input); ["0", "1"]
// } else {
//   new_input = input[0].split("");
//   // console.log(new_input); // ["2", "6"]
// }
// let cycle = 0;
// let tens = parseInt(new_input[0]); // 십의 자리
// let units = parseInt(new_input[1]); // 일의 자리
// let result = 0;
// let string_result = '';
// let result_array = new Array();

// // 미완성
// while(true){
//   cycle++;
//   result = tens + units;
//   string_result = result.toString();
//   result_array.push(string_result);
//   if (result === parseInt(input)){
//     break;
//   }
//   new_input = result.toString();
// }
// console.log(cycle);

//---------- 제출 코드 ----------
// input = ['26']
let result = parseInt(input[0]); // stdin 파일 내의 숫자를, 그대로 숫자로 변환.
let cycle = 0;
let init_num = result; // 비교대상은 new_input으로 그대로 두고, result를 별도로 선언.

while (true) {
  let sum = Math.floor(result / 10) + (result % 10); // 십의자리 숫자와 일의자리 숫자 더한 값 sum.

  // result = 26인 경우,
  // * Math.floor(5.5) = 5 (소수점 버림 연산)
  //                              2  +  6
  // (26 / 10 = 2.6 (십의자리 숫자)) + (26 % 10 = 6(일의자리 숫자)) ... = 8

  // result에서 더하기 전 일의 자리는 십의 자리 위치로, sum에서 더한 후의 일의 자리를 일의 자리 위치로 더하기.
  result = (result % 10) * 10 + (sum % 10);
  cycle++;
  if (init_num === result) {
    break;
  }
}
console.log(cycle);
