// 함수 표현식
function funcA() {
  console.log("funcA");
}
let varA = funcA;
varA();

let varB = function funcB() {
  console.log("funcB");
};
varB(); // funcB() 호출은 불가능.

//익명함수
let varC = function () {
  console.log("funcC");
};
varC();

// 화살표 함수
let varD = (value) => {
  console.log("value는 " + value);
  return 1;
};
let varE = (value) => 2 * value;

console.log(varD(11));
console.log(varE(20));
