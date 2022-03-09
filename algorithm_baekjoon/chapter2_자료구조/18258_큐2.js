// https://www.acmicpc.net/problem/18258 백준 큐2
//표준 입출력 구현
// let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

const [n, ...commands] = input;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item); // item 항목으로 새 노드 생성.
    if (!this.head) {
      // head가 없는 경우 = 큐가 비어있을 경우.
      this.head = node;
      this.head.next = this.tail; // 꼬리의 reference 주소 저장
    } else {
      // 꼬리의 다음 노드로 저장.
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  pop() {
    if (this.size > 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return item;
    } else {
      return -1;
    }
  }

  empty() {
    // 큐가 비어있지 않으면 0, 비어있으면 1
    return this.size ? 0 : 1;
  }

  front() {
    // 큐의 가장 앞에 있는 정수 출력, 또는 정수가 없는 경우 -1 출력
    return this.head ? this.head.item : -1;
  }

  back() {
    // 큐의 가장 뒤에 있는 정수 출력, 또는 정수가 없는 경우 -1 출력
    return this.tail ? this.tail.item : -1;
  }
}

// 문제 풀이
function solution(n, commands) {
  let answer = "";
  const queue = new Queue();

  for (let i = 0; i < n; i += 1) {
    const command = commands[i].split(" ")[0];

    switch (command) {
      case "push":
        const pushItem = commands[i].split(" ")[1];
        queue.push(pushItem);
        break;
      case "pop":
        answer += queue.pop() + " ";
        break;
      case "front":
        answer += queue.front() + " ";
        break;
      case "back":
        answer += queue.back() + " ";
        break;
      case "empty":
        answer += queue.empty() + " ";
        break;
      case "size":
        answer += queue.getSize() + " ";
        break;
      default:
        break;
    }
  }

  return answer.split(" ").join("\n");
}

// 제출
const answer = solution(n, commands);
console.log(answer);

/***********************************************************************/
// //동작은 잘 되지만, 시간 초과 코드.

// let command_num = parseInt(input[0]);
// let result = new Array();

// for (let i = 1; i <= command_num; i++) {
//   switch (input[i]) {
//     case "front":
//       if (result.length > 0) {
//         console.log(result[0]);
//       } else {
//         console.log(-1);
//       }
//       break;
//     case "back":
//       if (result.length > 0) {
//         console.log(result[result.length - 1]);
//       } else {
//         console.log(-1);
//       }
//       break;
//     case "size":
//       console.log(result.length);
//       break;
//     case "empty":
//       if (result.length > 0) {
//         console.log(0);
//       } else {
//         console.log(1);
//       }
//       break;
//     case "pop":
//       if (result.length > 0) {
//         console.log(result.shift());
//       } else {
//         console.log(-1);
//       }
//       break;
//     default:
//       // push 계열
//       result.push(input[i].split(" ")[1]);
//   }
// }
