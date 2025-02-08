// 콜백 함수 : 자산이 아닌 다른 함수에, 인수로써 전달된 함수를 의미합니다.

function main(value) {
  value();
}

// 콜백함수
function sub() {
  console.log("i am sub");
}

main(sub);

main(function () {
  console.log("i am sub2");
});

main(() => {
  console.log("i am sub3");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
