// https://www.acmicpc.net/problem/4948 베르트랑 공준


let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));
// 예제 입력이 \n으로 구분되어 들어오므로 
// let [b,c] = input[0].split(' ').nomap(x=>+x);

// console.log(input);

// 임의의 자연수 n에 대해 n보다 크고 2n보다 작거나 같은 소수는 적어도 하나 존재한다.
// 소수란 무엇인가? 자기 자신 외에 나머지 수로 나눴을때만 나머지가 0인 값. 크기만큼 for문? 2의 배수(짝수)는 무조건 제외?
// 홀수만 for문 돌리는건 어떻게하지? for i=3; i<2n-1; i=i+2 ? i가 3인 케이스는 돌아가나?

//문제풀이
// 1이 아닌 2부터 n사이의 모든 정수를 다 나누어 떨어지는 수가 있는지 확인하는 방법
let idx = 0;
function isPrime(a) {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    // Math.sqrt 특정값의 제곱근 구하는 방법
    if (a % i === 0) return false;
  }
  return true;
}

let result = new Array();
while (input[idx]) {
  const num = Number(input[idx]); // Number는 배열 안에 있는거 변수로
  let cnt = 0;
  if (num === 0) break;
  for (let i = num + 1; i <= 2 * num; i++) {
    if (isPrime(i)) {
      cnt += 1;
    }
  }
  // console.log(cnt);
  result.push(cnt);
  idx++;
}

console.log(result.join('\n'))