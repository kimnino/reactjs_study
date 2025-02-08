// 함수
var result1 = getArea(10, 10);
var result2 = getArea(10, 20);
var result3 = getArea(10, 30);
var result4 = getArea(10, 40);

console.log(result1, result2, result3, result4);

// 호이스팅 ( 선언문을 호출문보다 아래있어도 가능하게 해준다 )
// -> 끌어올리다.
function getArea(width, height) {
  // 중첩함수
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
