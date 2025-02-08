// 1. 변수
let age;

age = 30;

// 2. 상수 -> 반드시 초기화를 해야하고, 이후 값 변경이 불가능
const birth = "1992.12.03";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_$ = "123";
let _123 = 12;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let na2me;
let _3name;

// 3-3. 예약어를 사용할 수 없다.
let _let;
let if_;

// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;

let salesCount = 1;
let refundCount = 1;
let totalCount = salesCount - refundCount;
