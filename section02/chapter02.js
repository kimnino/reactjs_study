function returnFalse() {
  console.log("false 함수");
  return undefined;
}

function returnTrue() {
  console.log("true 함수");
  return 10;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());
// 앞에 결과만으로 연산식의 결과를 알 수 있을 때, 뒤에 부분을 확인 하지 않는다.

// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person에 값이 없음");
}

printName();
printName({ name: "김민혁" });
