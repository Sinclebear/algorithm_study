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
// const input = [];
const N = input.shift();
const result = [];

// 문자열을 다시 숫자 배열로 변환
let numInput = input.map((i) => Number(i))
// console.log(numInput)

const QUARTER = 25
const DIME = 10
const NICKEL = 5
const PENNY = 1

for (let change of numInput){
    let curChange = change
    let QL = parseInt(curChange / QUARTER)
    curChange = curChange - QUARTER * QL
    let DL = parseInt(curChange / DIME)
    curChange = curChange - DIME * DL
    let NL = parseInt(curChange / NICKEL)
    curChange = curChange - NICKEL * NL
    let PL = parseInt(curChange / PENNY)
    curChange = curChange - PENNY * PL
    console.log(`${QL} ${DL} ${NL} ${PL}`)
}