// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1992-12-03/10:10:10");
let date3 = new Date(1992, 12, 4, 12, 12, 12);
console.log(date2);
console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 UTC("1970.01.01 00시 00분 00초")로 부터
// 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(0);
date1.setDate(10);
date1.setHours(15);
date1.setMinutes(33);
date1.setSeconds(54);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //Tue Jan 10 2023
console.log(date1.toLocaleString()); //2023. 1. 10. 오후 3:33:54
