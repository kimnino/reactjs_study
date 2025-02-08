// 1. filter
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "김민혁", hobby: "축구" },
  { name: "조은지", hobby: "축구" },
  { name: "김민수", hobby: "독서" },
];

const soccerPeople = arr1.filter((item) => item.hobby === "축구");
console.log(soccerPeople);

// 2. map
// -> 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
let mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// -> 배열을 사전순으로 정렬하는 메서드 ( 문자의 사전순)
let arr3 = ["b", "a", "c"];
arr3.sort();
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1; // a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr3);
console.log(arr4);

// 4. toSorted
// -> 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "minhyuk"];
const joined = arr6.join(" "); // 괄호안에 아무것도 없으면 ,
console.log(joined);
