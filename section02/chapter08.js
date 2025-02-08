// 1. forEach
// -> 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(item, idx, arr);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// -> 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexOf
// -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index1 = arr3.indexOf(2);
let index2 = arr3.indexOf(20);
console.log(index1); // 0
console.log(index2); // -1

// 4. findIndex
// -> 모든 요소를 순회하면서, 콜백함수를 만족하는 인덱스(위치)를 찾아서 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

console.log(findedIndex);

// findIndex가 필요할 때 객체 안의 값을 찾을때!! 좋다
let objectArr = [{ name: "김민혁" }, { name: "조은지" }];
console.log(objectArr.indexOf({ name: "조은지" }));
console.log(objectArr.findIndex((item) => item.name === "조은지"));

// 5. find
// => 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "김민혁" }, { name: "조은지" }];

const finded = arr5.find((item) => item.name === "김민혁");
console.log(finded);
