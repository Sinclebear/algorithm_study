// https://www.acmicpc.net/problem/2839 백준 설탕 배달
// 표준 입출력 구현

let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
// let [b,c] = input[0].split(' ').map(x=>+x);

// 3,5 로 나눌수있는 수 구하기.
// 최대한 적은 포대를 가져가고 싶음 -> 5kg로 먼저 다 나눈 후 그 나머지를 3으로 나눈다
// 만약 딱 떨어지지 않는 수가 나오면, -1로 표시. 즉 나머지가 남으면 -1
// 주어진 값 N을 5로 나눈 후, 나머지가 0이면 곧바로 그 몫을 출력
    // if 나머지값이 3인 경우
    // 몫+1을 출력
    // else 그외 나머지 1,2,4 는 딱떨어지지 않음
    // -1 을 출력

    //----------------------------------------------------------

// 조금 잘못 생각했다.. 아무튼 5*n + 3*m 의 경우로 나누어떨어지면 장땡임. 단, 그중에 최소를 구해야. 이중 for문?
// 5 * (0 ~ parseInt(input/5)) 개 만큼,  3 * (0 ~ parseInt(input/3)) 개 만큼 돌리기.

function solution(input) {
    let five_remainder = parseInt(input%5) // 5로 나눈 나머지 반환
    let five_quotient = parseInt(input/5) // 5로 나눈 몫만 반환
    let three_remainder = parseInt(input%3) // 3으로 나눈 나머지 반환
    let three_quotient = parseInt(input/3) // 3으로 나눈 몫만 반환
    if(five_remainder === 0){
        return five_quotient; // 5로 나눈몫 반환
    } else if (modified_input%3 === 0){
        return five_quotient + 1;
    } else if (input){

    } else
        return -1;
}

console.log(solution(input))