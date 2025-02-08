// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;
let var4 = null;

let var5 = var1 ?? var2; // 10
let var6 = var1 ?? var3; // 20
let var7 = var1 ?? var4; // null
let var8 = var4 ?? var1; // undefined
let var9 = var2 ?? var3; // 10
let var10 = var3 ?? var2; // 20

let userName = "김민혁";
let userNickName = "조은지";
let displayName = userName ?? userNickName; // 김민혁

// 2. typeof 연산자 -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자
let var11 = 1;
let var12 = "1";
let var13 = true;
console.log(typeof var11, typeof var12, typeof var13); // number, string, boolean

// 3. 삼항 연산자 -> 항을 3개 사용하는 연산자
// -> 조건식을 이용하여 참, 거짓을 활용하여 값을 다르게 변환
let res = var9 % 2 === 0 ? "짝수" : "홀수";
