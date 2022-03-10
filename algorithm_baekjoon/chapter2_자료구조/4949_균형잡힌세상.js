//https://www.acmicpc.net/problem/4949 백준 4949 균형잡힌세상

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 참고 : https://rrecoder.tistory.com/192
const open = ["(", "["];
const close = [")", "]"];
let bracketStack;
const ans = [];

input.pop(); // 입력값 마지막 라인의 '.' 은 종료를 의미. 미리 제거.

// input 한줄씩 읽기
input.forEach((sentence) => {
  let isBool = false; // bracket 짝이 안맞는 경우를 확인할 boolean값
  bracketStack = []; // 괄호들을 저장할 배열 선언

  for (let i = 0; i < sentence.length; i++) {
    // 배열 1개 요소마다 비교, '(', '[' 있는지 조사
    if (open.includes(sentence[i])) {
      bracketStack.push(sentence[i]);
    } else if (close.includes(sentence[i])) {
      // sentence[i] 값에 ')', ']' 가 왔을 때, bracketStack에 넣어둔 '(' 또는 '[' 를 pop 하여 비교.
      // 짝이 맞는 경우 pop() 한 내용과 일치하여 통과할 것이고, 짝이 안맞는 경우 if문 내부 진입.
      if (bracketStack.pop() !== open[close.indexOf(sentence[i])]) {
        ans.push("no"); // bracket 짝이 안맞으므로 곧바로 탈출
        isBool = true;
        break;
      }
    }
  }
  // isBool false 인 경우 체크
  if (!isBool) {
    // bracket 짝이 다 맞은 상태로 탈출했는지 확인
    if (bracketStack.length === 0) {
      ans.push("yes");
    } else {
      ans.push("no");
    }
  }
});

console.log(ans.join("\n"));
