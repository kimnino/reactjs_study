// 1. 객체 생성
let object1 = new Object(); // 객체 생성자
let object2 = {}; // 객체 리터럴 ( 대부분 사용 )

// 2. 객체 프로퍼티 ( 객체 속성 )
let person = {
  name: "김민혁", // key : value
  age: 34,
  hobby: "축구",
  job: "개발자",
  extra: {},
  "like cat": true,
};

// 3. 객체 프로퍼티 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"]; // "" 안에 프로퍼티 명을 넣어야함.
let property = "hobby";
let hobby = person[property]; // 괄호 표기법이 동적활용에 좋을듯

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "자바 개발자";
person["favoriteFood"] = "치킨";

// 3.3 프로퍼티 수정하는 방법
person.jon = "서버 개발자";
person["favoriteFood"] = "피자";

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 ( in 연산자 )
let result1 = "name" in person; // true
let result2 = "cat" in person; // false
