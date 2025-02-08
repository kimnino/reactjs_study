// Promise는 비동기 작업을 감싸는 객체이다.
// Promise의 세 가지 상태 대기(Pending), 성공(Fulfilled), 실패(Rejected)
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executur

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

// then 메서드
// -> resolve 이후 처리
// catch 메서드
// -> reject 이후 처리
const p = add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
